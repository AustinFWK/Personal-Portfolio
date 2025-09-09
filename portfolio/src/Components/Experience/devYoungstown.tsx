import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function DevYoungstown() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="devyoungstown logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          DevYoungstown
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
