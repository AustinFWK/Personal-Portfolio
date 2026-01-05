import GitHubIcon from "@mui/icons-material/GitHub";
import {
  IconButton,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Box,
} from "@mui/material";

export default function DiscordBot() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="valorant logo"
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
            Valorant Patchnotes Bot
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            I developed a discord bot that automatically scrapes the Valorant
            patchnotes page and posts them in a designated discord channel
            whenever a new patch is released.
          </Typography>
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            Tech Stack: Python, Discord.py, BeautifulSoup, Selenium
          </Typography>
          <IconButton
            component="a"
            href="https://github.com/AustinFWK/valorant-news-bot"
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
