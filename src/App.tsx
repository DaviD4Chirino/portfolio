import "./App.sass";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
export default function App() {
  return (
    <div className="font">
      <RouterProvider router={router} />
    </div>
  );
}
