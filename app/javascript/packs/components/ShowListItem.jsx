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
        <ListItem button>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          {props.isSearchItem ? (
            <ListItemText
              primary={`Show: ${props.showData.name}`}
              secondary={props.showData.description}
            />
          ) : (
            <ListItemText
              primary={props.showData.name}
              secondary={props.showData.description}
            />
          )}
        </ListItem>
      </Link>
    </div>
  );
}
