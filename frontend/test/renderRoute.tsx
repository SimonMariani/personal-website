/** @format */

import { render } from "@testing-library/react";
import App from "@/App";

// App owns its own BrowserRouter, which reads the path from window.location, so
// set the location before rendering instead of injecting a router.
export function renderRoute(path: string) {
  window.history.pushState({}, "", path);
  return render(<App />);
}
