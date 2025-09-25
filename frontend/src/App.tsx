/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider, Grid } from "antd";
import MainPage from "@/pages/MainPage";

const { useBreakpoint } = Grid;

function App() {
  // Get the current screen size so we can determine if should use the small layout
  const screens = useBreakpoint();
  const useSmall = (screens.xs || screens.sm) && !screens.md ? true : false;

  // Return the main application
  return (
    <BrowserRouter>
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

            // Font
            fontFamily: "Inter, sans-serif",
            fontSize: 14,

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
    </BrowserRouter>
  );
}

export default App;
