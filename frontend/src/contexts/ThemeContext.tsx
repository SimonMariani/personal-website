/** @format */

import { createContext, useContext, useState } from "react";
import { Grid, ConfigProvider, theme as stylingTheme } from "antd";
import type { ReactNode } from "react";
import type { GlobalToken, ThemeConfig } from "antd";
const { useToken } = stylingTheme;
const { useBreakpoint } = Grid;

// The available themes that are used in the application
type AvailableThemes = "light" | "dark";

// The custom token definition
type CustomToken = {
  [key: string]: any;
};

// The theme classnames
type ThemeClassnames = {
  [key in AvailableThemes]: string;
};

// The ThemeContextProps type is used to define the shape of the context value that is provided by the ThemeContext.
type ThemeContextProps = {
  /* The themes object contains the light and dark themes that are used in the application. */
  themes: { [key in AvailableThemes]: ThemeConfig };

  /* The theme property contains the current theme that is used in the application. */
  theme: AvailableThemes;

  /* The setTheme function is used to set the theme of the application. */
  setTheme: (theme: AvailableThemes) => void;

  /* The customTokens object contains the custom tokens that are used in the application. */
  customTokens: {
    [key in AvailableThemes]: CustomToken;
  };

  /* The themeClassnames object contains the classnames that are used for the themes. */
  themeClassnames: ThemeClassnames;
};

// The token themes that are shared between all theme tokens
const sharedTokenStyles: Partial<GlobalToken> = {
  borderRadius: 10,
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  // colorPrimary: "#008C8C",
  // colorPrimary: "#66baba",
  // colorPrimary: "#b8b1f1",
  colorPrimary: "red",
  // colorPrimary: hexToRgba("#008C8C", 0.6),
};

// The antd tokens for each theme
const themes: ThemeContextProps["themes"] = {
  light: {
    algorithm: stylingTheme.defaultAlgorithm,
    token: {
      ...sharedTokenStyles,
      colorBgBase: "#F2F2F2",
      colorBgContainer: "#FFFFFF",
      colorTextBase: "#3E4A59",
    },
  },

  dark: {
    algorithm: stylingTheme.darkAlgorithm,
    token: {
      ...sharedTokenStyles,
    },
    components: {},
  },
};

// The classnames belnging to the themes
const themeClassnames: ThemeClassnames = {
  light: "light-theme",
  dark: "dark-theme",
};

// The custom tokens that contain styles that are not in the antd globaltoken
const sharedCustomTokenStyles: { [key: string]: any } = {
  fontSizeSmall: 11,
  fontSizeSmallest: 10,
  transition: "all 0.5s",
  colorsGraph: ["#3366CC", "#DC3912", "#FF9900", "#109618", "990099"],
};

// The token styles that are specific to the themes
const customTokens: ThemeContextProps["customTokens"] = {
  light: {
    ...sharedCustomTokenStyles,
    colorBgHeader: "#FFFFFF",
    colorBgSider: "#FFFFFF",
  },
  dark: {
    ...sharedCustomTokenStyles,
    colorBgBase: "#1E1E1E",
  },
};

// The ThemeContext is created with the ThemeContextProps type as the value type or undefined which is the default value.
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

/**
 * The ThemeProvider component is used to provide the theme context to the application. It contains the themes, theme, setTheme and customTokens properties
 * that are used in the application.
 */
function ThemeProvider({ children }: { children: ReactNode }) {
  // Set the default theme to the prefered theme of the user
  // const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const [theme, setTheme] = useState<ThemeContextProps["theme"]>(prefersDarkMode ? "dark" : "light");
  const [theme, setTheme] = useState<ThemeContextProps["theme"]>("light");

  console.log("Current theme:", theme);

  // Return the ThemeContext.Provider with the themes, theme, setTheme and customTokens properties.
  return (
    <ThemeContext.Provider value={{ themes, theme, setTheme, customTokens, themeClassnames }}>
      <ConfigProvider theme={themes[theme]}>
        <div className={themeClassnames[theme]}>{children}</div>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

/**
 * The useTheme hook is used to access the theme context that is provided by the ThemeProvider.
 */
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

/**
 * The useCustomToken hook is used to access the custom tokens that are provided by the ThemeProvider. It combines the antd tokens with the custom token for
 * the current theme.
 */
function useCustomToken() {
  // Obtain the token and theme from the useToken and useTheme hooks
  const { token } = useToken();
  const { theme } = useTheme();

  const screens = useBreakpoint();
  const useSmall = (screens.xs || screens.sm) && !screens.md ? true : false;

  // Combine the token with the custom token for the current theme
  const customToken: GlobalToken & CustomToken = { ...token, ...customTokens[theme], useSmall };

  // Return the custom token
  return {
    token: customToken,
  };
}

export { ThemeProvider, useTheme, useCustomToken };
