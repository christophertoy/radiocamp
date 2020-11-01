import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import EpisodeList from "./EpisodeListItem";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EpisodeListItem from "./EpisodeListItem";
import EpisodeForm from "./EpisodeForm";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#272C2F",
  },
}));

export default function episodeList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="episode-list-container">
        <div id="episode-list-header">
          <div>
            <Typography variant="h4">Episodes</Typography>
          </div>
          <div>
            {props.currentUser === props.broadcasterData.handle && (
              <EpisodeForm
                broadcasterId={props.broadcasterData.id}
                showId={props.showId}
                setEpisodes={props.setEpisodes}/>
            )}
          </div>
        </div>
        {props.episodes.map((episode, index) => {
          return (
            <EpisodeListItem
              key={index}
              broadcasterData={props.broadcasterData}
              episodeData={episode}/>
          );
        })}
      </div>
    </div>
  );
}
