import { Typography, Card, CardContent, Box } from "@mui/material";
import { SiTypescript } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";

export default function FrontEnd() {
  return (
    <Card>
      <CardContent>
        <Box>
          <Typography variant="h4" component="div" align="center">
            Front-End
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            marginTop="1rem"
          >
            <SiTypescript size={40} style={{ margin: "0.5rem" }} />
            <FaReact size={40} style={{ margin: "0.5rem" }} />
            <FaHtml5 size={40} style={{ margin: "0.5rem" }} />
            <FaCss3Alt size={40} style={{ margin: "0.5rem" }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
