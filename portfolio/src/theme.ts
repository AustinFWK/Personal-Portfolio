import { createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3b82f6", // Modern blue
      light: "#60a5fa",
      dark: "#2563eb",
    },
    secondary: {
      main: "#0ea5e9", // Cyan accent
      light: "#22d3ee",
      dark: "#0284c7",
    },
    background: {
      default: "#0f172a", // Deep slate
      paper: "#1e293b", // Lighter slate for cards
    },
    text: {
      primary: "#f1f5f9", // Light slate
      secondary: "#cbd5e1", // Medium slate
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#3b82f6",
          textDecoration: "none",
          fontWeight: 500,
          "&:hover": {
            color: "#60a5fa",
            textDecoration: "underline",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "0.2s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: 6,
          },
        },
      },
    },
  },

  typography: {
    fontFamily: "Inter, Roboto, Helvetica, Arial, sans-serif",

    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
  },
});
