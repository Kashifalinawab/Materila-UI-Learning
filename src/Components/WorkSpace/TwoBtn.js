import React, { useState } from "react";
import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

function TwoBtn(props) {
  const [formate, setFormate] = useState(null | []);
  console.log(formate);
  const handleChnageFormate = (e, updatedFormate) => {
    setFormate(updatedFormate);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<ConnectingAirportsIcon />}
          disableRipple
          onClick={() => alert("clicked")}
        >
          Air
        </Button>
        <Button
          variant="contained"
          endIcon={<ConnectingAirportsIcon />}
          disableElevation
        >
          Air
        </Button>
        <IconButton aria-label="Air" color="success" size="large">
          <ConnectingAirportsIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="text"
          orientation="vertical"
          size="large"
          color="primary"
          arial-lang="button grp"
        >
          <Button onClick={() => alert("lft")}>Left</Button>
          <Button onClick={() => alert("cntr")}>Center</Button>
          <Button onClick={() => alert("rgt")}>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="Toggle grp"
          value={formate}
          onChange={handleChnageFormate}
          size="small"
          color="secondary"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default TwoBtn;
