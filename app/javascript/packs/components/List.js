import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
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
  const [state, setState] = useState("");
  useEffect(async () => {
    const resp = await axios.get("/shows.json");
    console.log(resp.data);
    setState(resp.data[0]);
  }, []);
  // map over array of props and pass them down to ShowListItem
  return (
    <div className={classes.root}>
      <Typography variant="h4">Shows</Typography>
      <ShowListItem
        name={state.name}
        description={state.description}
      ></ShowListItem>
    </div>
  );
}
