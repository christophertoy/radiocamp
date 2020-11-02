import React from "react";
import {
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Player from "./Player";
import EpisodeForm from "./EpisodeForm";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { getEmbedCode } from './helpers';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    backgroundColor: "#272C2F",
  },
});

export default function Episode(props) {
  const classes = useStyles();

  const [episodeData, setEpisodeData] = useState({});
  const match = useRouteMatch();
  let { episodeId } = useParams();

  useEffect(async () => {
    // this API call will return a custom JSON object that contains all episdoe data and showName and image
    const resp = await axios.get(`/episodes/${episodeId}.json`);
    // const thisBroadcaster = resp.data.find((x) => x.handle === props.handle);
    setEpisodeData(resp.data);
  }, []);

  const episodeCode= getEmbedCode(episodeData.episode_url);
  
  return ( 
    <div>
      <Card className={classes.root} square={true} id="episode-card">
        <CardMedia
          component="img"
          alt={episodeData.title}
          height="250"
          image={episodeData.image+'?fit=crop&h=250&w=1080&crop=entropy'}
          title={episodeData.title}
        />
        <CardContent class="episode-card-content">
          <Typography gutterBottom variant="h5" component="h2">
            {episodeData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Link to={`/${props.broadcasterData.handle}/${episodeData.show_id}`} style={{textDecoration: 'none', color: 'inherit'}}>
              <em>from {episodeData.showName}</em>
            </Link>
          </Typography>
          <Typography variant="body2" component="p">
            {episodeData.description}
          </Typography>
          <EpisodeForm setEpisodeData={setEpisodeData} text={'Edit Episode'} broadcasterId= {props.broadcasterData.id} broadcasterData={props.broadcasterData} episodeData={episodeData} showId={episodeData.show_id}/>
        </CardContent>
      </Card>
      <Player className="player" embedCode={episodeCode}/>
    </div>
  );
}