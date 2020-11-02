import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowListItem from "./ShowListItem";
import ShowForm from "./ShowForm";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#272C2F",
  },
}));

export default function showList(props) {
  console.log(props.shows[0]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div id="show-list-container">
        <div id="show-list-header">
          <div>
            {" "}
            <Typography variant="h4">Shows</Typography>
          </div>
          <div>
            {props.currentUser === props.broadcasterData.handle && (
              <ShowForm
                setShows={props.setShows}
                broadcasterId={props.broadcasterData.id}
              />
            )}
          </div>
        </div>
        {props.shows.map((show) => {
          return (
          <List>

            <ShowListItem
              key={show.id}
              broadcasterData={props.broadcasterData}
              showData={show}
              // showId={show.id}
              // name={show.name}
              // description={show.description}
            />


          </List>
          );
        })}
      </div>
    </div>
  );
}
