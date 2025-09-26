/** @format */

import { createContext, useState } from "react";
import type { ReactNode } from "react";

type GlobalContextProps = {
  /* Whether the keyboard is currently open (mobile only) */
  keyboardOpen: boolean;

  /* Set the keyboard open state */
  setKeyboardOpen: (open: boolean) => void;
};

// The context object
const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

// The provider component
const GlobalProvider = ({ children }: { children: ReactNode }) => {
  // The keyboard open state
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  // Return the children inside the context provider inside the data component
  return <GlobalContext.Provider value={{ keyboardOpen, setKeyboardOpen }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalProvider };
