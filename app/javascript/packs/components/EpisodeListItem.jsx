import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Typography, ListItem, ListItemText, ListItemAvatar, Avatar } from "@material-ui/core";
import {
  Link,
  useRouteMatch,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // backgroundColor: theme.palette.background.paper,
  },
}));

export default function EpisodeListItem(props) {
  console.log('props from epilistitem', props);
  const classes = useStyles();
  let match = useRouteMatch();

  return (
    <div className={classes.root}>
      <Link
        to={`/${props.broadcasterData.handle}/${props.episodeData.show_id}/${props.episodeData.id}`}
        style={{ textDecoration: "none" }}
      >
        <ListItem button alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              style={{ height: "120px", width: "160px" }}
              variant="square"
              alt={props.episodeData.title}
              src={props.episodeData.image + "?fit=crop&h=100&w=100&crop=entropy"}
            />
          </ListItemAvatar>
          {props.isSearchItem ? (
            <ListItem alignItems="flex-start">
              <div class="episode-title">
                <Typography variant="h5">{props.episodeData.title}</Typography>
                <Typography>
                  {`Episode ${props.episodeData.episode_number}: ${props.episodeData.release_date.split("T")[0]}`}
                </Typography>
              </div>
              <div class="episode-description">
                <Typography>{props.episodeData.description}</Typography>
              </div>
            </ListItem>
          ) : (
            <ListItem alignItems="flex-start">
              <div class="episode-title">
                <Typography variant="h5">{props.episodeData.title}</Typography>
                <Typography>{`Episode ${props.episodeData.episode_number}: ${props.episodeData.release_date.split("T")[0]}`}</Typography>
              </div>
              <div class="episode-description">
                <Typography>{props.episodeData.description}</Typography>
              </div>
            </ListItem>
            )}
          <ListItemText primary={props.episodeData.date} />
        </ListItem>
        <Divider class="show-list-divider" variant="middle" />
      </Link>
    </div>
  );
}
