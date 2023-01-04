import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardAppliance from "./CardAppliance";

function Appliance(props) {
  return (
    <Container>
      <Box>
        <CardAppliance />
      </Box>
    </Container>
  );
}

export default Appliance;
