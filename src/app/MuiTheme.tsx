import { createTheme, ThemeProvider } from "@mui/material/styles";

const themeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1F6E8C",
    },
    secondary: {
      main: "#270082",
    },
    info: {
      main: "#FA58B6",
    },
    background: {
      default: "#1A1A40",
      paper: "#18014f",
    },
  },
});

export default function MuiTheme({ children }: { children: any }) {
  return <ThemeProvider theme={themeOptions}>{children}</ThemeProvider>;
}
