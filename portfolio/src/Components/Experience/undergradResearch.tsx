import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function UndergraduateResearch() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="TA logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Undergraduate Research{" "}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          I was fortunate to be part of my universities undergraduate Data
          Science reseach program, where we teamed up with executives from
          Fortune500 company TA to develop a software solution to their online
          review crisis. We engineered a full stack web app that allowed TA to
          upload csv files of their online customer reviews, which we then
          analyzed using the Ollama AI model mistral. This analysis provided an
          oversight of the performance of each selected district/site, allowing
          for targeted improvements and strategies to enhance customer
          satisfaction.
        </Typography>
      </CardContent>
    </Card>
  );
}
