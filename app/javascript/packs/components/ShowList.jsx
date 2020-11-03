import React from "react";
import ShowListItem from "./ShowListItem";
import ShowForm from "./ShowForm";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, List } from "@material-ui/core";
import { applyTheme } from "./themes";

export default function showList(props) {

  const classes = applyTheme(props.broadcasterData.theme);

  return (
    <div className={classes.root}>
      <div id="show-list-container">
        <div id="show-list-header">
          <div>
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
            <ShowListItem
              key={show.id}
              broadcasterData={props.broadcasterData}
              showData={show}              
            />
          );
        })}
      </div>
    </div>
  );
}
