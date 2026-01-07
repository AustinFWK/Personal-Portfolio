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
          color: "#ad6639ff", // or "primary.main" if using functions
          textDecoration: "none",
          fontWeight: 500,
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});
