import { IconButton, Card, Typography, CardContent, Box } from "@mui/material";
import { LatestCommit } from "../../Utils/getLastCommit";
import GitHubIcon from "@mui/icons-material/GitHub";
import PsychologyIcon from "@mui/icons-material/Psychology";

export default function HabitTracker() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <PsychologyIcon />
          <Typography gutterBottom variant="h5" component="div">
            Habit Tracker (WIP)
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            I'm currently developing a web app that will allow users to insert
            their daily habits, which will provide insight as to why they may be
            feeling a certain way. The app will also provide positive habits
            that the user can work on developing within themselves, as well as
            research driven instructions on how to develop these habits. There
            will also be a calendar system that allows for users to view past
            logs and see how their habits have affected their mood over time.
          </Typography>
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            Tech Stack: React, TypeScript, Node.js, Python, FastAPI, SQLite
          </Typography>
          <LatestCommit username="AustinFWK" repo="HabitTracker" />
          <IconButton
            component="a"
            href="https://github.com/AustinFWK/HabitTracker"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
