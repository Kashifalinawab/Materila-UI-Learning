import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
function Select(props) {
  const [countries, setCountries] = useState([]);
  console.log({ countries });
  const handleChange = (e) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          mutiple: "true",
        }}
         
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="UN">United State</MenuItem>
        <MenuItem value="AU">Austrilia</MenuItem>
        <MenuItem value="Pak">Paskistan</MenuItem>
      </TextField>
    </Box>
  );
}

export default Select;
