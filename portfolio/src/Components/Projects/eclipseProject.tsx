import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
        <Typography gutterBottom variant="h5" component="div">
          Ohio Eclipse Web App
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          During my first ever hackathon in 2024, I developed a web application
          centralized around backend functionality that obtained the user's
          location, and provided routes to cities based in Ohio that had the
          best viewing experience for the 2024 solar eclipse.
        </Typography>
        <Typography variant="h6" sx={{ color: "text.primary" }}>
          Tech Stack: React(JS), Node.js, Python, Flask, GoogleMaps API
        </Typography>
      </CardContent>
    </Card>
  );
}
