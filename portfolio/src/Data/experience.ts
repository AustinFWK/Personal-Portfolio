export type experience = {
  organization: string;
  organization_url?: string;
  title: string;
  dateRange: string;
  description: string;
  svgIcon: string;
  secondarySvgIcon?: string;
};

export const experiences: experience[] = [
  {
    organization: "DevYoungstown",
    organization_url: "https://www.youngstown.dev/",
    title: "Full Stack Software Engineer",
    dateRange: "June 2024 - December 2025",
    description:
      "As a Full Stack Software Engineer at DevYoungstown, I was tasked with developing and maintaining Web App MVPs for our clients!",
    svgIcon: "Dev-Youngstown-logo.svg",
  },

  {
    organization: "Youngstown State University",
    organization_url: "https://ysu.edu/",
    title: "Student Software Engineer",
    dateRange: "August 2024 - December 2025",
    description:
      "As a Student Software Engineer at Youngstown State University, I focused on utilizing HTML, CSS, and JavaScript to maintain the 100s of YSU websites!",
    svgIcon: "YSU.svg",
  },

  {
    organization: "Youngstown State University",
    organization_url: "https://ysu.edu/",
    title: "Undergraduate Researcher",
    dateRange: "August 2024 - May 2025",
    description:
      "Partnered with Fortune 500 company TravelCenters of America to build a review analytics platform. Users upload customer reviews (CSV), which are analyzed by an AI model to identify performance trends by district and drive targeted improvements.",
    svgIcon: "YSU.svg",
    secondarySvgIcon: "TA.svg",
  },
];
