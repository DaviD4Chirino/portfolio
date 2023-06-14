import { createBrowserRouter } from "react-router-dom";
import { loadable } from "react-lazily/loadable";
import Loading from "../pages/Loading";
const { Home } = loadable(() => import("../pages"), {
  fallback: <Loading />,
});
export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
