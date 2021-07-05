import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../hooks/useTheme";
import AppRouter from "../routes/PublicRouter";


export function ThemedApp() {
  const { theme, setTheme, themeLoaded } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}