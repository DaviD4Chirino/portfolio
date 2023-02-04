import { Route, Routes } from "react-router-dom";
import "./css/style.css";
import "./css/project_style.css";
import "./css/library_style.css";

import { Main } from "./main";
import { Writing } from "./pages/writing";

import { Footer } from "./Footer";

export function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>

      <Footer />
    </>
  );
}
