import React from "react";
import {
  useLocation
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import EpisodeListItem from "./EpisodeListItem";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ShowListItem from "./ShowListItem";
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#272C2F",
  },
}));

export default function Search(props) {
  const classes = useStyles();
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);

  const handle = props.broadcasterData.handle;

  useEffect(async () => {
    if (props.broadcasterData.handle) {
      const queryPath = `/${handle}/api/search${location.search}`;
      const resp = await axios.get(queryPath);
      setSearchResults(resp.data.results);
    }
  }, [props.broadcasterData.handle, location]);

  return (
    <div className={classes.root}>
      <div id="search-list-container">
        <div id="show-list-header">
          <div>
            {searchResults.length === 0 ? <Typography variant="h4">No Search Results Found</Typography> :
            <Typography variant="h4">Search Results</Typography>
            }
          </div>
        </div>
        {searchResults.map((x, i) => x.show_id ?
          <List>
            <EpisodeListItem
              key={i}
              episodeData={x}
              // id={x.id}
              // title={x.title}
              // description={x.description}
              // date={x.date}
              broadcasterData={props.broadcasterData}
              isSearchItem={true}
            />
          </List> :
          <List>
            <ShowListItem
              key={i}
              showData={x}
              // id={x.id}
              // name={x.name}
              // description={x.description}
              // date={x.date}
              broadcasterData={props.broadcasterData}
              isSearchItem={true}
            />
          </List>)}
      </div>
    </div>
  );
}