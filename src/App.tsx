import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { lightTheme } from "./styles/themes/lightTheme";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from "./contexts/CyclesContext";
import { useContext } from "react";
import { CyclesContext } from "./contexts/CyclesContext";

function MainApp () {
  const { theme } = useContext(CyclesContext)

  return (
    <ThemeProvider theme={theme ? defaultTheme : lightTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export function App() {
  return (
    <CyclesContextProvider>
      <MainApp  />
    </CyclesContextProvider>
  );
}
