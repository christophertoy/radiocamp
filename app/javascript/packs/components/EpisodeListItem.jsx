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
              src={(props.episodeData.image || props.episodeData.show_image) + "?fit=crop&h=100&w=100&crop=entropy"}
            />
          </ListItemAvatar>
          {props.isSearchItem ? (
            <ListItem alignItems="flex-start">
              <div class="episode-title">
                <Typography 
                  variant="h6"                
                  style={{ textTransform: "uppercase" }}
                >
                  {`Episode ${props.episodeData.episode_number}: ${props.episodeData.title}`}
                </Typography>
                <Typography variant="subtitle2" style={{ fontStyle: "italic" }}>
                  {props.episodeData.release_date.split("T")[0]}
                </Typography>
                <Typography variant="subtitle2" style={{ fontStyle: "italic" }}>
                  {`Show: ${props.episodeData.showName}`}
                </Typography>
              </div>
              <div class="episode-description">
                <Typography variant="body1">
                  {props.episodeData.description}
                </Typography>
              </div>
            </ListItem>
          ) : (
            <ListItem alignItems="flex-start">
              <div class="episode-title">
                <Typography 
                  variant="subtitle1"
                  style={{ textTransform: "uppercase" }}
                  >
                  {`Episode ${props.episodeData.episode_number}: ${props.episodeData.title}`}
                </Typography>
                <Typography variant="subtitle2"  style={{ fontStyle: "italic" }}>
                  {props.episodeData.release_date.split("T")[0]}
                </Typography>
              </div>
              <div class="episode-description">
                <Typography variant="body1">
                  {props.episodeData.description}
                </Typography>
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
