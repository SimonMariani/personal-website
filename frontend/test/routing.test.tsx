/** @format */

import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { renderRoute } from "./renderRoute";

// MainPage renders ten ApexCharts; ApexCharts needs a real canvas/DOM that jsdom
// lacks, so stub the chart component out. We only care about routing here.
vi.mock("react-apexcharts", () => ({ default: () => null }));

// The app has a single content route ("/") and a catch-all 404 page for everything else.
describe("routing", () => {
  it("renders the main page at /", () => {
    renderRoute("/");
    expect(screen.getByRole("heading", { level: 3, name: "Simon Mariani" })).toBeInTheDocument();
  });

  it("renders the 404 page for an unknown path", () => {
    renderRoute("/this-route-does-not-exist");
    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 3, name: "Simon Mariani" })).not.toBeInTheDocument();
  });
});
