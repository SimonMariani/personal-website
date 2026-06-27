/** @format */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { UserEvent } from "@testing-library/user-event";
import ContactFormModal from "@/components/contact/ContactFormModal";

// The component delegates submission to @formspree/react's useForm hook, so we
// mock the hook to drive its state (form / submitting / succeeded / errors)
// rather than asserting anything about the network request the library makes.
import { useForm } from "@formspree/react";

vi.mock("@formspree/react", () => ({
  useForm: vi.fn(),
}));

const mockUseForm = vi.mocked(useForm);
const handleSubmit = vi.fn();
const reset = vi.fn();

// A useForm return value with the given state; defaults to an idle, empty form.
function mockState(overrides: Record<string, unknown> = {}) {
  const state = { submitting: false, succeeded: false, errors: null, ...overrides };
  mockUseForm.mockReturnValue([state, handleSubmit, reset] as unknown as ReturnType<typeof useForm>);
}

async function openForm(user: UserEvent) {
  await user.click(screen.getByRole("button", { name: "Contact me" }));
}

async function fillAndSubmit(user: UserEvent) {
  await user.type(screen.getByPlaceholderText("your@email.com"), "jan@example.com");
  await user.type(screen.getByPlaceholderText("Your message..."), "I'd like to get in touch.");
  await user.click(screen.getByRole("button", { name: "Send" }));
}

describe("ContactFormModal", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockState();
  });

  it("opens the form when the Contact me button is clicked", async () => {
    const user = userEvent.setup();
    render(<ContactFormModal />);

    expect(screen.queryByText("Send a message")).not.toBeInTheDocument();
    await openForm(user);

    expect(screen.getByText("Send a message")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("your@email.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your message...")).toBeInTheDocument();
  });

  it("submits the form data to the Formspree handler", async () => {
    const user = userEvent.setup();
    render(<ContactFormModal />);

    await openForm(user);
    await fillAndSubmit(user);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(expect.objectContaining({ email: "jan@example.com", message: "I'd like to get in touch." }));
  });

  it("does not submit when the required fields are empty", async () => {
    const user = userEvent.setup();
    render(<ContactFormModal />);

    await openForm(user);
    await user.click(screen.getByRole("button", { name: "Send" }));

    // antd's form validation blocks onFinish, so the Formspree handler is never called.
    await screen.findByText("Please enter your email");
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("shows the success view once the submission has succeeded", async () => {
    mockState({ succeeded: true });
    const user = userEvent.setup();
    render(<ContactFormModal />);

    await openForm(user);

    expect(screen.getByText("Message sent!")).toBeInTheDocument();
    expect(screen.getByText(/Thank you for reaching out/)).toBeInTheDocument();
    // The form is replaced by the success view.
    expect(screen.queryByPlaceholderText("your@email.com")).not.toBeInTheDocument();
  });

  it("shows an error alert when the submission fails", async () => {
    mockState({ errors: { getFormErrors: () => [{ message: "boom" }] } });
    const user = userEvent.setup();
    render(<ContactFormModal />);

    await openForm(user);

    await waitFor(() => expect(screen.getByText("Something went wrong. Please try again.")).toBeInTheDocument());
    // The form stays mounted so the visitor can retry.
    expect(screen.getByText("Send a message")).toBeInTheDocument();
  });
});
