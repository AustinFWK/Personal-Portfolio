import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
      </CardContent>
    </Card>
  );
}
