import { Typography, Card, CardContent, Box } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiXcode } from "react-icons/si";

export default function DevTools() {
  return (
    <Card>
      <CardContent>
        <Box>
          <Typography variant="h4" component="div" align="center">
            Dev Tools
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            marginTop="1rem"
          >
            <FaGithub size={40} style={{ margin: "0.5rem" }} />
            <VscVscodeInsiders size={40} style={{ margin: "0.5rem" }} />
            <SiXcode size={40} style={{ margin: "0.5rem" }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
