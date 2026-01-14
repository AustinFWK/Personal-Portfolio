import { Typography, Box, Card, CardContent } from "@mui/material";
import type { experience } from "../../Data/experience";

interface ExperienceCardProps {
  experience: experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const {
    organization,
    title,
    dateRange,
    description,
    svgIcon,
    secondarySvgIcon,
  } = experience;

  return (
    <Card sx={{ maxWidth: 345, marginBottom: "2rem" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src={svgIcon}
          alt={`${organization} logo`}
          style={{
            height: "25%",
            width: "25%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1rem",
          }}
        />
        {secondarySvgIcon && (
          <img
            src={secondarySvgIcon}
            alt={`${organization} secondary logo`}
            style={{
              height: "25%",
              width: "25%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "1rem",
            }}
          />
        )}
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
          <Typography gutterBottom variant="h4">
            {organization}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {dateRange}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
