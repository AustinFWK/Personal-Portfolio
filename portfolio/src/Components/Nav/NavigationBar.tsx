import NavBar from "./navBarLayout.tsx";
import { navbarItems } from "../../Data/navbar";
import { Typography, Box } from "@mui/material";

export default function NavigationBar() {
  return (
    <Box
      component="nav"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "rgba(15, 23, 42, 0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          px: 3,
          py: 2,
        }}
      >
        <Typography
          sx={{ marginRight: "auto", fontSize: "1.1rem", fontWeight: 600 }}
          component="a"
          href="#hero"
        >
          Austin Winger-Kailer
        </Typography>
        {navbarItems.map((item) => (
          <NavBar items={item} key={item.label} />
        ))}
      </Box>
    </Box>
  );
}
