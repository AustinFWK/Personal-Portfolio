import { Card, CardContent, Typography, Box } from "@mui/material";
import type { skills } from "../../Data/skills";

interface TechCardProps {
  skill: skills;
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
          {icons.map((IconComponent, index) => (
            <IconComponent key={index} size={40} style={{ margin: "0.5rem" }} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
