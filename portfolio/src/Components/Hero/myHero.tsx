import { Box, Stack, Typography } from "@mui/material";
import Socials from "./socials";

export default function MyHero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={8}
        alignItems="center"
        maxWidth={1000}
      >
        {/* Image */}
        <Box
          component="img"
          src="/headshot.jpg"
          alt="Hero Image"
          sx={{
            width: { xs: 200, md: 350 },
            height: { xs: 250, md: 400 },
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />

        {/* Text */}
        <Stack spacing={3} alignItems={{ xs: "center", md: "flex-start" }}>
          <Typography
            variant="h2"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Hello! I&apos;m Austin Winger-Kailer
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            I&apos;m a Full Stack Web Developer based out of Youngstown, Ohio. I
            love to build projects from the ground up and slowly watch them
            piece together into something special.
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            When I&apos;m not working, I enjoy spending my time on personal
            projects, playing video games when time permits, and collecting
            Pokémon cards!
          </Typography>

          <Socials />
        </Stack>
      </Stack>
    </Box>
  );
}
