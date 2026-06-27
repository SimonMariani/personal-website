/** @format */

import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { renderRoute } from "./renderRoute";

// MainPage renders ten ApexCharts; ApexCharts needs a real canvas/DOM that jsdom
// lacks, so stub the chart component out. We only care about routing here.
vi.mock("react-apexcharts", () => ({ default: () => null }));

// The app currently has a single route ("/") and no catch-all 404 page.
describe("routing", () => {
  it("renders the main page at /", () => {
    renderRoute("/");
    expect(screen.getByRole("heading", { level: 3, name: "Simon Mariani" })).toBeInTheDocument();
  });

  it("renders nothing for an unknown path (no 404 page is defined)", () => {
    renderRoute("/this-route-does-not-exist");
    expect(screen.queryByRole("heading", { level: 3, name: "Simon Mariani" })).not.toBeInTheDocument();
  });
});
