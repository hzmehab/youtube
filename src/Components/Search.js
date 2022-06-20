import React from "react";
import { Button, TextField, Paper, Typography } from "@mui/material";

export default function Search(props) {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Typography variant="h4" color="error">
        Youtube
      </Typography>
      <form onSubmit={props.getResult}>
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          size="small"
          sx={{ mx: 1 }}
        />
        <Button variant="contained" size="medium" color="error">
          Search
        </Button>
      </form>
    </Paper>
  );
}
