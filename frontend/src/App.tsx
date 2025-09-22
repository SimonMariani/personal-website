/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ChatPage from "@/pages/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="App" style={{ width: "100vw", height: "100vh" }}>
          <Routes>
            <Route path="/" element={<ChatPage />}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
