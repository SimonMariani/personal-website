/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider, Grid } from "antd";
import { GlobalProvider } from "@/contexts/GlobalContext";
import MainPage from "@/pages/MainPage";

const { useBreakpoint } = Grid;

function App() {
  // Get the current screen size so we can determine if should use the small layout
  const screens = useBreakpoint();
  const useSmall = (screens.xs || screens.sm) && !screens.md;

  // Return the main application
  return (
    <BrowserRouter>
      <GlobalProvider>
        <ConfigProvider
          theme={{
            token: {
              // General colors
              colorPrimary: "#1677ff",
              colorSecondary: "#505050ff",

              // Text colors
              colorTextBase: "#ffffff",
              colorText: "#ffffff",
              colorTextAlternative: "#000000ff",
              colorTextQuaternary: "#ffffff",
              colorTextSecondary: "#ffffff",
              colorTextTertiary: "#ffffff",
              colorTextPlaceholder: "#272727ff",

              // NOTE antd's Typography type="secondary" reads colorTextDescription (not colorTextSecondary)
              colorTextDescription: "#a6a6a6",

              // Font
              fontFamily: "Inter, sans-serif",
              fontSize: 14,

              // Layout colors
              colorBgHeader: "#242424",
              colorBgFooter: "#292929",
              boxShadowHeader: "10px 0 20px rgba(0, 0, 0, 0.5)",

              // Remaining
              borderRadius: 10,
              boxShadow: "2px 2px 5px rgba(255, 255, 255, 0.10)",

              // Whether the useSmall layout should be used
              useSmall: useSmall,
            },
            components: {
              Carousel: {
                arrowSize: 30,
                arrowOffset: 20,
                dotActiveWidth: 32,
                dotHeight: 8,
                dotWidth: 16,
              },
              Modal: {
                contentBg: "#272727",
                headerBg: "#272727",
                footerBg: "#272727",
              },
            },
          }}
        >
          {/* We simply want the entire app to be the viewport width and height */}
          <div className="App" style={{ width: "100dvw", height: "100dvh" }}>
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
            </Routes>
          </div>
        </ConfigProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
