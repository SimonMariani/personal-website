/** @format */

import { useState, useEffect } from "react";
import type { ReactNode } from "react";

// This is kind of a quirky fix for https://github.com/apexcharts/apexcharts.js/issues/1077. Basically it waits until we're on the client side to render the
// chart, avoiding SSR issues.
function ClientOnly({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return <>{children}</>;
}

export default ClientOnly;
