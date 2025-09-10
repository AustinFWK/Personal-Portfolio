import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function SWEYSU() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="ysu logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h4">
          Youngstown State University
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Student Software Engineer
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          I am a Student Software Engineer at Youngstown State University where
          I focus on utilizing HTML, CSS, and JavaScript to maintain the 100s of
          YSU websites!
        </Typography>
      </CardContent>
    </Card>
  );
}
