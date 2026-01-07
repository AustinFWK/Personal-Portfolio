import { Box, Card, CardContent, Typography, Link } from "@mui/material";

export default function DevYoungstown() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <img
        src="Dev-Youngstown-logo.svg"
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography gutterBottom variant="h4">
            DevYoungstown
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Full Stack Software Engineer
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            June 2024 - Decemeber 2025
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            I am currently a full stack Software Engineer at{" "}
            <Link href="https://www.youngstown.dev/" target="_blank">
              DevYoungstown
            </Link>{" "}
            where I specialize in developing and maintaining Web App MVPs for
            our clients!
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
