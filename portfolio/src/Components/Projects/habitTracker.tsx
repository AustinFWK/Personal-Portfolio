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
            textAlign: "center",
          }}
        >
          <PsychologyIcon />
          <Typography gutterBottom variant="h5" component="div">
            Habit Tracker (WIP)
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            I developed a habit tracking web application that allows users to
            enter a journal entry about what they did during the day and also
            log how their mood was that day (very bad, neutral, very good,
            etc.). The user's entry is then sent to the backend where I use an
            anthropic AI model to analyze the entry and provide feedback on the
            user's habits and ways they can improve their habits through small
            daily changes.
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
