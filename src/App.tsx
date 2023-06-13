import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.sass";

import Message from "./utility/Message";
import useClickAway from "./utility/useClickAway";
import { Button } from "@mui/material";
export default function App() {
  return (
    <div className="font">
      <Button variant="contained" color="primary">
        Click
      </Button>
    </div>
  );
}
