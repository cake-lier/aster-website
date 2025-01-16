import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import PokemonGB from "./resources/PokemonGb.ttf";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    divider: "#000000",
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["PokemonGB", "sans-serif"].join(", "),
    fontSize: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'PokemonGB';
          font-style: normal;
          font-weight: 400;
          src: url(${PokemonGB}) format('truetype');
        }
      `,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
