/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import MainPage from "@/pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            // colorPrimary: "#1D4ED8",
            colorPrimary: "#1677ff",
            // colorPrimary: "#15803D",
            colorSecondary: "#505050ff",
            fontFamily: "'Lora', 'Playfair Display', serif",
            borderRadius: 10,
            boxShadow: "2px 2px 5px rgba(255, 255, 255, 0.10)",
            fontSize: 14,
          },
        }}
      >
        {/* We simply want the entire app to be the viewport width and height */}
        <div className="App" style={{ width: "100vw", height: "100vh" }}>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
          </Routes>
        </div>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
