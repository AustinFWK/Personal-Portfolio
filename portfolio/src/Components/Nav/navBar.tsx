import { Link } from "@mui/material";

export default function NavBar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "background.default",
        backdropFilter: "blur(10px)",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "1rem",
            paddingRight: "2rem",
            paddingBottom: "1rem",
          }}
        >
          <Link href="SWE_resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
