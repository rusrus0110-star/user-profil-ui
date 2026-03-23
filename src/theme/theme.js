import { createTheme } from "@mui/material/styles";

export const createAppTheme = (mode, primaryColor) => {
  const baseTheme = createTheme({
    palette: {
      mode,
    },
  });

  return createTheme({
    palette: {
      mode,

      primary: baseTheme.palette[primaryColor],

      background:
        mode === "light"
          ? {
              default: "#f5f5f5",
              paper: "#ffffff",
            }
          : {
              default: "#121212",
              paper: "#1e1e1e",
            },
    },
  });
};
