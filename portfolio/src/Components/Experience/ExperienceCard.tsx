import { Typography, Box, Card, CardContent } from "@mui/material";
import type { Experience } from "../../Data/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const {
    organization,
    organization_url,
    title,
    dateRange,
    description,
    bullet_points,
    svgIcon,
    secondarySvgIcon,
  } = experience;

  return (
    <Card
      sx={{
        maxWidth: 420,
        mb: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          py: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <img
          src={svgIcon}
          alt={`${organization} logo`}
          style={{
            height: "25%",
            width: "25%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        />
        {secondarySvgIcon && (
          <img
            src={secondarySvgIcon}
            alt="Secondary logo"
            style={{
              height: "21%",
              width: "21%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
        )}
      </Box>

      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 0.5,
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component={organization_url ? "a" : "div"}
            href={organization_url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            {organization}
          </Typography>

          <Typography variant="body1" fontWeight={500}>
            {title}
          </Typography>

          <Typography variant="caption" color="text.secondary">
            {dateRange}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mt: 1,
              color: "text.secondary",
              maxWidth: "45ch",
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
          <Box
            component="ul"
            sx={{ m: 0, pl: 2, textAlign: "left", listStyleType: "disc" }}
          >
            {bullet_points.map((point, index) => (
              <Typography
                component="li"
                variant="body2"
                key={index}
                sx={{
                  color: "text.secondary",
                  mb: 1,
                  mt: 2,
                  lineHeight: 1.7,
                  fontSize: "0.9rem",
                  letterSpacing: "0.5px",
                }}
              >
                {point}
              </Typography>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
