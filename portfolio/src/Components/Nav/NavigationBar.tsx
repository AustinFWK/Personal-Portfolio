import NavBar from "./navBarLayout.tsx";
import { navbarItems } from "../../Data/navbar";
import { Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, MenuItem, Menu } from "@mui/material";
import { useState } from "react";

export default function NavigationBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Open the menu
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
        {/* Mobile menu button */}
        <IconButton
          onClick={handleMenuClick}
          sx={{ display: { xs: "flex", md: "none" }, marginRight: "auto" }}
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown menu - controlled by anchorEl */}
        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
          <MenuItem component="a" href="#hero" onClick={handleMenuClose}>
            Austin Winger-Kailer
          </MenuItem>
          {navbarItems.map((link) => (
            <MenuItem
              key={link.label}
              component="a"
              href={link.href}
              onClick={handleMenuClose}
            >
              {link.label}
            </MenuItem>
          ))}
        </Menu>

        <Typography
          sx={{
            marginRight: "auto",
            fontSize: "1.1rem",
            fontWeight: 600,
            display: { xs: "none", md: "flex" },
          }}
          component="a"
          href="#hero"
        >
          Austin Winger-Kailer
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {navbarItems.map((item) => (
            <NavBar items={item} key={item.label} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
