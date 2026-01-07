import { createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#4c2018ff",
    },

    background: {
      default: "#242424ff",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#5d3821ff", // or "primary.main" if using functions
          textDecoration: "none",
          fontWeight: 500,
          "&:hover": {
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
});
