import { Link } from "@mui/material";

export default function NavBar() {
  return (
    <nav>
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link href="SWE_resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
