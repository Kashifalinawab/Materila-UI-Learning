import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

function RadioBtn(props) {
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-exp-grp">Years of Experience</FormLabel>
        <RadioGroup name="job-experience" aria-label="job-exp-grp">
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-9" value="6-9" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default RadioBtn;
