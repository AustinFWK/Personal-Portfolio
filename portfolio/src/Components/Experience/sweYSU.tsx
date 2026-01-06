import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function SWEYSU() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <img
        src="YSU.svg"
        alt="YSU logo"
        style={{
          height: "25%",
          width: "25%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "1rem",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h4">
          Youngstown State University
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Student Software Engineer
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          2024-Present
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
