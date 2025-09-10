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
        alt="brain logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Habit Tracker (WIP)
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          I'm currently developing a web app that will allow users to insert
          their daily habits, which will provide insight as to why they may be
          feeling a certain way. The app will also provide positive habits that
          the user can work on developing within themselves, as well as research
          driven instructions on how to develop these habits. There will also be
          a calendar system that allows for users to view past logs and see how
          their habits have affected their mood over time.
        </Typography>
      </CardContent>
    </Card>
  );
}
