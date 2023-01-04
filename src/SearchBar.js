import React, { useState } from "react";
import "./style.css";
import { Box, TextField, Button, InputAdornment, Stack } from "@mui/material";
import MonitorIcon from "@mui/icons-material/Monitor";
import NearMeIcon from "@mui/icons-material/NearMe";
import { Container } from "@mui/system";

function SearchBar(props) {
  const [state, setState] = useState("");
  return (
    <Stack direction="row">
      {/* <Container > */}

      <Box>
        <TextField
          // sx={{ borderRadius:15 }}
          // className="text-field1"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MonitorIcon />
              </InputAdornment>
            ),
          }}
          placeholder="What are you looking for ?"
        ></TextField>
      </Box>
      <Box>
        <TextField
          // className="text-field2"
          placeholder="Your location"
          onChange={(e) => {
            setState(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NearMeIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  sx={{ borderRadius: 5 }}
                  onClick={() => alert(state)}
                >
                  Search
                </Button>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Box>
      {/* </Container> */}
    </Stack>
  );
}

export default SearchBar;
