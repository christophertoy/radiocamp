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
  console.log(props.shows[0]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">Shows</Typography>
      {props.shows.map((show) => {
        return (
          <ShowListItem
            key={show.id}
            broadcasterData={props.broadcasterData}
            showData={show}
            // showId={show.id}
            // name={show.name}
            // description={show.description}
          />
        );
      })}
    </div>
  );
}
