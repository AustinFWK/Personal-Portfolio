import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function DevYoungstown() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <img
        src="/public/Dev-Youngstown-logo.svg"
        alt="devyoungstown logo"
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
          DevYoungstown
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Full Stack Software Engineer
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          2024-Present
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          I am currently a full stack Software Engineer at{" "}
          <a href="https://www.youngstown.dev/" target="_blank">
            DevYoungstown
          </a>{" "}
          where I specialize in developing and maintaining Web App MVPs for our
          clients!
        </Typography>
      </CardContent>
    </Card>
  );
}
