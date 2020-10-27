import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import EpisodeList from "./EpisodeListItem";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EpisodeListItem from "./EpisodeListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function episodeList(props) {
  const classes = useStyles();
  const [state, setState] = useState([]);

  useEffect(async () => {
    const resp = await axios.get("/episodes.json");
    const filteredData = resp.data.filter(x => x.show_id == props.showId); 
    console.log(filteredData);
    setState(filteredData);
  }, [props.broadcasterId]);
  
  return (
    <div className={classes.root}>
      <Typography variant="h4">Episodes</Typography>
      {state.map((episode) => {
        return (
          <EpisodeListItem
            key={episode.id}
            id={episode.id}
            title={episode.title}
            description={episode.description}
            date={episode.date}
          />
        );
      })}
      {/* <EpisodeListItem />
      <EpisodeListItem />
      <EpisodeListItem />
      <EpisodeListItem />
      <EpisodeListItem /> */}
    </div>
  );
}