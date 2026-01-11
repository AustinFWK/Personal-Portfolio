import { Link, Box } from "@mui/material";

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
        <Link
          href="SWE_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
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
