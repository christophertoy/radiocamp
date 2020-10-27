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
  const [state, setState] = useState([]);
  useEffect(async () => {
    const resp = await axios.get("/shows.json");
    setState(resp.data);
  }, []);
  
  return (
    <div className={classes.root}>
      <Typography variant="h4">Shows</Typography>
      {state.map((show) => {
        return (
          <ShowListItem
            key={show.id}
            name={show.name}
            description={show.description}
          />
        );
      })}
    </div>
  );
}
