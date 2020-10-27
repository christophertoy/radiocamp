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
  let { path, url } = useRouteMatch();
  console.log('useRouteMatch', path, url);
  let { broadcasterHandle } = useParams();

  return (
    <div className={classes.root}>
      <Link to={`${url}/${props.showId}`}>
        <ListItem button>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText primary={props.name} secondary={props.description} />
        </ListItem>
      </Link>
    </div>
  );
}
