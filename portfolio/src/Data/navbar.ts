export type NavbarItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const navbarItems: NavbarItem[] = [
  { label: "Austin Winger-Kailer", href: "#hero" },
  { label: "Skills", href: "#tech-skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "SWE_resume.pdf", external: true },
];
