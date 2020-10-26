import React from "react";
import ShowListItem from "./ShowListItem";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function showList(props) {
  const classes = useStyles();
  // map over array of props and pass them down to ShowListItem
  return (
    <div className={classes.root}>
      <Typography variant="h4">Shows</Typography>
      <ShowListItem></ShowListItem>
      <ShowListItem></ShowListItem>
      <ShowListItem></ShowListItem>
    </div>
  );
}
