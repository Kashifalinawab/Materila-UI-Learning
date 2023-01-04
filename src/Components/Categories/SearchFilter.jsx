import React from "react";
import {
  Button,
  Box,
  Stack,
  TextField,
  MenuItem,
  Slider,
  Typography,
} from "@mui/material";
import { border } from "@mui/system";

function SearchFilter(props) {
  return (
    <Box
      sx={{
        width: "300px",
        // margin: "5em",
        border: "1px solid",
        padding: "20px",
      }}
    >
      <Stack direction="column" spacing={1}>
        {/* <Box> */}
        <Typography>Search Filter</Typography>
        <Typography>Keyword</Typography>

        <TextField placeholder="What are you looking for ?"></TextField>
        <Typography>Sort By</Typography>

        <TextField select label="Sort By">
          <MenuItem>Price Low to High</MenuItem>
          <MenuItem>Price High to Low</MenuItem>
          <MenuItem>Newest</MenuItem>
        </TextField>
        <Typography>Category</Typography>

        <TextField select label="Categories">
          <MenuItem>All Categories</MenuItem>
          <MenuItem>Construction</MenuItem>
          <MenuItem>Car Wash</MenuItem>
          <MenuItem>Electrical</MenuItem>
          <MenuItem>Cleaning</MenuItem>
          <MenuItem>Interior</MenuItem>
          <MenuItem>Computer</MenuItem>
        </TextField>
        <Typography>Sub Category</Typography>

        <TextField select label="Sub-Categories">
          <MenuItem>Select Category</MenuItem>
          <MenuItem>Other</MenuItem>
          <MenuItem>Other</MenuItem>
        </TextField>
        <Typography>Location</Typography>

        <TextField placeholder="Search Location"></TextField>
        <Typography> Price Range</Typography>

        <Typography> $ 5-$ 500</Typography>
        <Slider step={10} />
        <Button
          variant="contained"
          sx={{ borderRadius: 5 }}
          onClick={() => alert("Click")}
        >
          Search
        </Button>
        {/* </Box> */}
      </Stack>
    </Box>
  );
}

export default SearchFilter;
