import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import EpisodeListItem from "./EpisodeListItem";
import EpisodeForm from "./EpisodeForm";
import { applyTheme } from "./themes";

export default function episodeList(props) {

  const classes = applyTheme(props.broadcasterData.theme);

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
