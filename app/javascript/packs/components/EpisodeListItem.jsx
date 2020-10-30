import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import Divider from "@material-ui/core/Divider";
// import InboxIcon from "@material-ui/icons/Inbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
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
        <ListItem button>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={props.episodeData.showImage+"?fit=crop&h=100&w=100&crop=entropy"}/>
          </ListItemAvatar>
          {props.isSearchItem ? (
            <ListItemText
              primary={`Episode: ${props.episodeData.title}`}
              secondary={props.episodeData.description}
            />
          ) : (
            <ListItemText
              primary={`${props.episodeData.title} - Episode ${props.episodeData.episode_number}: ${props.episodeData.release_date.split("T")[0]}`}
              secondary={props.episodeData.description}
            />
          )}
          <ListItemText primary={props.episodeData.date} />
        </ListItem>
      </Link>
    </div>
  );
}
