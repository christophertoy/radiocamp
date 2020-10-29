import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import EpisodeList from "./EpisodeList";
import { useEffect, useState } from "react";
import axios from "axios";
import EpisodeListItem from "./EpisodeListItem";
import Player from "./Player";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getEmbedCode } from './helpers';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});

export default function Episode(props) {
  const classes = useStyles();

  const [episodeData, setEpisodeData] = useState({});
  const match = useRouteMatch();
  let { episodeId } = useParams();

  useEffect(async () => {
    // this API call will return a custom JSON object that contains all episdoe data and showName and showImage
    const resp = await axios.get(`/episodes/${episodeId}.json`);
    // const thisBroadcaster = resp.data.find((x) => x.handle === props.handle);
    setEpisodeData(resp.data);
  }, []);
  
  return ( 
    <div>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={episodeData.showImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {episodeData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Link to={`/${props.broadcasterData.handle}/${episodeData.show_id}`} style={{textDecoration: 'none', color: 'inherit'}}>
              <em>from {episodeData.showName}</em>
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {episodeData.description}
          </Typography>          
        </CardContent>
      </Card>
      <Player className="player" embedCode={getEmbedCode(episodeData.episode_url)}/>
    </div>
  );
}