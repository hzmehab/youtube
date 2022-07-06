import React, { useContext, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { itemsContext } from "../App";
import { getTrends } from '../Components/APIList'

export default function Trend() {
  const {items, setItems, currentPage, setCurrentPage} = useContext(itemsContext);

  const fetchTrends = async (trendId) => {
    let api = await fetch(getTrends(trendId))
    let data = await api.json();
    setItems(data.items);
  };

  useEffect(() => {
    setCurrentPage('trend')
    fetchTrends('20')
  }, [])

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
