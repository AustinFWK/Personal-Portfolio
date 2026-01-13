import { Typography, Card, CardContent, Box } from "@mui/material";
import { FaPython } from "react-icons/fa";
import { SiSqlite, SiFastapi, SiExpress } from "react-icons/si";

export default function BackEnd() {
  return (
    <Card>
      <CardContent>
        <Box>
          <Typography variant="h4" component="div" align="center">
            Back-End
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            marginTop="1rem"
          >
            <FaPython size={40} style={{ margin: "0.5rem" }} />
            <SiFastapi size={40} style={{ margin: "0.5rem" }} />
            <SiExpress size={40} style={{ margin: "0.5rem" }} />
            <SiSqlite size={40} style={{ margin: "0.5rem" }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
