import { Typography } from "@mui/material";
import type { NavbarItem } from "../../Data/navbar";

interface NavBarProps {
  items: NavbarItem;
}

export default function NavBar({ items }: NavBarProps) {
  const { label, href, external } = items;

  return (
    <Typography
      sx={{ marginLeft: "1rem", fontSize: "1.1rem", fontWeight: 600 }}
      component="a"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {label}
    </Typography>
  );
}
