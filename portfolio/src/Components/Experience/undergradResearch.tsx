import { Typography, CardContent, Card, Box } from "@mui/material";

export default function UndergraduateResearch() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
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
        <img
          src="TA.svg"
          alt="TA logo"
          style={{
            height: "25%",
            width: "25%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1rem",
          }}
        />
      </Box>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Undergraduate Research{" "}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            August 2024 - May 2025
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            I was fortunate to be part of my universities undergraduate Data
            Science reseach program, where we teamed up with executives from
            Fortune500 company TA to develop a software solution to their online
            review crisis. We engineered a full stack web app that allowed TA to
            upload csv files of their online customer reviews, which we then
            analyzed using the Ollama AI model mistral. This analysis provided
            an oversight of the performance of each selected district/site,
            allowing for targeted improvements and strategies to enhance
            customer satisfaction.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
