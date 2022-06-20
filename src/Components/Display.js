import React from "react";
import { Grid, Typography } from "@mui/material";
import ReactPlayer from "react-player";

export default function Display(props) {
  let items = props.items;
  return (
    <Grid container spacing={1}>
      {items.map((item, index) => {
        const videoId = item.id.videoId;
        const videoTitle = item.snippet.title;
        return (
          <Grid item xs={4} sx={{ p: 3, mt: 4 }} key={index}>
            <Typography sx={{ maxWidth: "250px" }} noWrap title={videoTitle}>
              {videoTitle}
            </Typography>
            <ReactPlayer
              controls="true"
              width="100%"
              height="100%"
              url={`http://www.youtube.com/embed/${videoId}`}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
