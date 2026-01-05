import {
  IconButton,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Box,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function EclipseProject() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="eclipse photo"
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Ohio Eclipse Web App
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            During my first ever hackathon in 2024, I developed a web
            application centralized around backend functionality that obtained
            the user's location, and provided routes to cities based in Ohio
            that had the best viewing experience for the 2024 solar eclipse.
          </Typography>
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            Tech Stack: React(JS), Node.js, Python, Flask, GoogleMaps API
          </Typography>
          <IconButton
            component="a"
            href="https://github.com/AustinFWK/hackysu-2024"
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
