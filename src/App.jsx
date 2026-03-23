import { useMemo, useState, useEffect } from "react";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Switch,
} from "@mui/material";

import { createAppTheme } from "./theme/theme";
import ProfilePlayground from "./components/profilePlayground";

function App() {
  const [mode, setMode] = useState(
    () => localStorage.getItem("themeMode") || "light",
  );

  const [primaryColor, setPrimaryColor] = useState(
    () => localStorage.getItem("primaryColor") || "primary",
  );

  const theme = useMemo(
    () => createAppTheme(mode, primaryColor),
    [mode, primaryColor],
  );

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem("primaryColor", primaryColor);
  }, [primaryColor]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* HEADER */}
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Profile Manager</Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2">
              {mode === "light"
                ? "Switch to dark theme"
                : "Switch to light theme"}
            </Typography>

            <Switch checked={mode === "dark"} onChange={toggleTheme} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* MAIN */}
      <ProfilePlayground
        primaryColor={primaryColor}
        setPrimaryColor={setPrimaryColor}
      />
    </ThemeProvider>
  );
}

export default App;
