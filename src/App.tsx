import "./App.sass";
import { Navbar, Portfolio, Projects } from "./modules/exports";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { screenSize } from "./utility/screenSize";
import Library, { Main } from "./modules/pages/Library";
import { Cuento } from "./modules/pages/Cuento";
// import { ScrollTopButton } from "./utility/ScrollTopButton";

export default function App() {
  const screenFont = screenSize().x > 640 ? "desktop" : "mobile";

  return (
    <div className={"font " + screenFont}>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Navigate to="/portfolio" />} path="/*" />

          <Route index path="/portfolio" element={<Portfolio />} />
          <Route
            element={
              <>
                <Projects />
              </>
            }
            path="/projects"
          />
          <Route
            element={
              <>
                <Library />
              </>
            }
            path="/library"
          >
            <Route index path="*" element={<Navigate to="index" />} />
            <Route index path="index" element={<Main />} />
            <Route path="cuento/:id" element={<Cuento />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
