export type experience = {
  organization: string;
  title: string;
  dateRange: string;
  description: string;
};

export const experiences: experience[] = [
  {
    organization: "DevYoungstown",
    title: "Full Stack Software Engineer",
    dateRange: "June 2024 - December 2025",
    description:
      "I am currently a full stack Software Engineer at DevYoungstown where I specialize in developing and maintaining Web App MVPs for our clients!",
  },

  {
    organization: "Youngstown State University",
    title: "Student Software Engineer",
    dateRange: "August 2024 - December 2025",
    description:
      "I am a Student Software Engineer at Youngstown State University where I focus on utilizing HTML, CSS, and JavaScript to maintain the 100s of YSU websites!",
  },

  {
    organization: "Youngstown State University",
    title: "Undergraduate Researcher",
    dateRange: "August 2024 - May 2025",
    description:
      "I was fortunate to be part of my universities undergraduate Data Science reseach program, where we teamed up with executives from Fortune500 company TA to develop a software solution to their online review crisis. We engineered a full stack web app that allowed TA to upload csv files of their online customer reviews, which we then analyzed using the Ollama AI model mistral. This analysis provided an oversight of the performance of each selected district/site, allowing for targeted improvements and strategies to enhance customer satisfaction.",
  },
];
