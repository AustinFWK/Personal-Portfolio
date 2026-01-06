import { Box, Card, CardContent, Typography } from "@mui/material";

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography gutterBottom variant="h4">
            Youngstown State University
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Student Software Engineer
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            August 2024 - December 2025
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            I am a Student Software Engineer at Youngstown State University
            where I focus on utilizing HTML, CSS, and JavaScript to maintain the
            100s of YSU websites!
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
