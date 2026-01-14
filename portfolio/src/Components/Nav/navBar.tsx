import { Link, Box, Typography } from "@mui/material";

export default function NavBar() {
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
          sx={{ marginLeft: "1rem", fontSize: "1.1rem", fontWeight: 600 }}
          component="a"
          href="#tech-skills"
        >
          Skills
        </Typography>
        <Typography
          sx={{ marginLeft: "1rem", fontSize: "1.1rem", fontWeight: 600 }}
          component="a"
          href="#experience"
        >
          Experience
        </Typography>
        <Typography
          sx={{ marginLeft: "1rem", fontSize: "1.1rem", fontWeight: 600 }}
          component="a"
          href="#projects"
        >
          Projects
        </Typography>
        <Link
          href="SWE_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            marginLeft: "1rem",
            fontSize: "1.1rem",
            fontWeight: 600,
          }}
        >
          Resume
        </Link>
      </Box>
    </Box>
  );
}
