import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Appliance from "./Appliance";
import SearchFilter from "./SearchFilter";

function Catrgories(props) {
  return (
    <Box
      sx={{
        display: "flex",
        margin: "5em",
        padding: "20px",
        justifyContent:'space-between'
      }}
    >
      {/* <Stack> */}
      <SearchFilter />
      <Appliance />
      {/* </Stack> */}
    </Box>
  );
}

export default Catrgories;
