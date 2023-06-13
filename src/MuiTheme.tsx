import { createTheme, ThemeProvider } from "@mui/material/styles";

const themeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#b388ff",
    },
    secondary: {
      main: "#ff80ab",
    },
    info: {
      main: "#0288d1",
    },
    background: {
      default: "#1a002d",
      paper: "#0b0431",
    },
  },
});
import React from "react";

export default function MuiTheme({ children }: { children: any }) {
  return <ThemeProvider theme={themeOptions}>{children}</ThemeProvider>;
}
