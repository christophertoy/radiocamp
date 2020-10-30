import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import EpisodeList from "./EpisodeListItem";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EpisodeListItem from "./EpisodeListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function episodeList(props) {
  const classes = useStyles();
  
  
  return (
    <div className={classes.root}>
      <Typography variant="h4">Episodes</Typography>
      {props.episodes.map((episode, index) => {
        return (
          <EpisodeListItem
            key={index}
            broadcasterData={props.broadcasterData}
            episodeData={episode}
          />
        );
      })}
    </div>
  );
}