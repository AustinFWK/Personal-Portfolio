import { Card, CardContent, Typography, Box, Tooltip } from "@mui/material";
import type { Skills } from "../../Data/skills";

interface TechCardProps {
  skill: Skills;
}

export default function TechCard({ skill }: TechCardProps) {
  const { category, icons } = skill;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="div" align="center">
          {category}
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          marginTop="1rem"
        >
          {icons.map((skillIcon, index) => {
            const Icon = skillIcon.icon;
            return (
              <Tooltip
                key={index}
                title={skillIcon.tooltip}
                arrow
                slotProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: skillIcon.color,
                      color: "#fff",
                      fontSize: "0.875rem",
                      padding: "0.5rem 1rem",
                    },
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: "inline-flex",
                    margin: "0.5rem",
                  }}
                >
                  <Icon size={40} color={skillIcon.color} />
                </Box>
              </Tooltip>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
}
