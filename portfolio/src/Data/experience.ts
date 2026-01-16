export type Experience = {
  organization: string;
  organization_url?: string;
  title: string;
  dateRange: string;
  description: string;
  bullet_points: string[];
  svgIcon: string;
  secondarySvgIcon?: string;
};

export const experiences: Experience[] = [
  {
    organization: "DevYoungstown",
    organization_url: "https://www.youngstown.dev/",
    title: "Full Stack Software Engineer",
    dateRange: "June 2024 - December 2025",
    description:
      "As a Full Stack Software Engineer at DevYoungstown, I was tasked with developing and maintaining Web App MVPs for our clients!",
    bullet_points: [
      "Built FastAPI REST APIs and databases to support client MVPs and data-driven decisions.",
      "Developed reusable React + TypeScript components (tables, filters, RBAC, game logic) to improve UX and maintainability.",
      "Integrated engagement features like OneSignal notifications and interactive UI flows.",
    ],
    svgIcon: "Dev-Youngstown-logo.svg",
  },

  {
    organization: "Youngstown State University",
    organization_url: "https://ysu.edu/",
    title: "Student Software Engineer",
    dateRange: "August 2024 - December 2025",
    description:
      "As a Student Software Engineer at Youngstown State University, I focused on utilizing HTML, CSS, and JavaScript to maintain the 100s of YSU websites!",
    bullet_points: [
      "Maintained and updated YSU websites using HTML, CSS, and JavaScript to ensure content accuracy and enhance user experience.",
      "Collaborated with non-techinical staff to gather requirements and implement website changes effectively.",
    ],
    svgIcon: "YSU.svg",
  },

  {
    organization: "Youngstown State University",
    organization_url: "https://ysu.edu/",
    title: "Undergraduate Researcher",
    dateRange: "August 2024 - May 2025",
    description:
      "My class partnered with Fortune 500 company TravelCenters of America to build a review analytics platform. Users upload customer reviews (CSV), which are analyzed by an AI model to identify performance trends by district and drive targeted improvements.",
    bullet_points: [
      "Integrated filtering using MUI components to analyze reviews by location and date range.",
      "Added Olama AI model for sentiment analysis and trend identification in customer reviews.",
      "Collaborated weekly with stakeholders to align platform features with business needs.",
    ],
    svgIcon: "YSU.svg",
    secondarySvgIcon: "TA.svg",
  },
];
