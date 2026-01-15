import {
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
  Icon,
  Chip,
  Stack,
} from "@mui/material";
import type { project } from "../../Data/project";
import { LatestCommit } from "../../Utils/getLastCommit";
import GitHubIcon from "@mui/icons-material/GitHub";

interface ProjectCardProps {
  project: project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    svgIcon,
    title,
    description,
    bullet_points,
    technologies,
    repo_owner,
    repo_name,
    repo_link,
  } = project;

  return (
    <Card sx={{ maxWidth: 420, marginBottom: "2rem" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Icon
          component={svgIcon}
          style={{
            height: "15%",
            width: "15%",
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
            gap: 2.5,
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 1,
              color: "text.secondary",
              maxWidth: "45ch",
              lineHeight: 1.7,
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
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            gap={1}
            sx={{ mt: 2 }}
          >
            {technologies.map((tech) => (
              <Chip
                onClick={() => {}}
                key={tech}
                label={tech}
                size="medium"
                variant="outlined"
              />
            ))}
          </Stack>
          <Typography>
            <LatestCommit username={repo_owner} repo={repo_name} />
          </Typography>
          <IconButton
            component="a"
            href={repo_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            sx={{
              color: "text.primary",
              "&:hover": {
                backgroundColor: "transparent",
                color: "primary.main",
              },
            }}
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
