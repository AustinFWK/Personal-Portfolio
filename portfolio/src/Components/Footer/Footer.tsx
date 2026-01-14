import { FaCodeBranch } from "react-icons/fa6";
import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        padding: "1rem",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "0.5rem",
      }}
    >
      <Typography sx={{ fontWeight: 600 }}>
        © Austin Winger-Kailer {new Date().getFullYear()}
      </Typography>
      <Link
        href="https://github.com/AustinFWK/Personal-Portfolio"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "default" }}
      >
        <FaCodeBranch color="white" />
      </Link>
    </Box>
  );
}
