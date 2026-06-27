/** @format */

import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// jsdom does not implement these browser APIs that antd relies on, so provide
// minimal stubs to keep the components from crashing during render.
window.matchMedia ??= vi.fn().mockImplementation((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

globalThis.ResizeObserver ??= class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// ChatInput reads window.visualViewport.height, which jsdom does not provide.
window.visualViewport ??= { height: 768, width: 1024, addEventListener: vi.fn(), removeEventListener: vi.fn() } as unknown as VisualViewport;
