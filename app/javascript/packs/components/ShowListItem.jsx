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
import Divider from '@material-ui/core/Divider';
import Avatar from "@material-ui/core/Avatar";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function ShowListItem(props) {
  const classes = useStyles();
  let match = useRouteMatch();
  let { broadcasterHandle } = useParams();

  return (
    <div className={classes.root}>
      <Link
        to={`/${props.broadcasterData.handle}/${props.showData.id}`}
        style={{ textDecoration: "none" }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              style={{ height: "120px", width: "160px" }}
              variant="square"
              alt={props.showData.title}
              src={props.showData.image + "?fit=crop&h=100&w=100&crop=entropy"}
            />
          </ListItemAvatar>
          {props.isSearchItem ? (
            <div class="show-title">
              <Typography variant="h5">{props.showData.name}</Typography>
              <Typography>{`Genre: ${props.showData.genre}`}</Typography>
            </div>
          ) : (
            <ListItem alignItems="flex-start">
              <div class="show-title">
                <Typography variant="h5">{props.showData.name}</Typography>
                <Typography>{`Hosted by ${props.showData.host}`}</Typography>
              </div>
              <div class="show-description">
                <Typography variant="body1">{props.showData.description}</Typography>
              </div>
              {/* <ListItemText
              primary={props.showData.name}
              secondary={`Hosted by ${props.showData.host}`}
              />
              <ListItemText
              secondary={props.showData.description}
              /> */}
            </ListItem>
          )}
        </ListItem>
        <Divider class="show-list-divider" variant="middle" />
      </Link>
    </div>
  );
}
