import React from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Player from "./Player";
import EpisodeForm from "./EpisodeForm";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@material-ui/core";
import { getEmbedCode } from "./helpers";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    // backgroundColor: "#272C2F",
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

  const episodeCode = getEmbedCode(episodeData.episode_url);

  return (
    <div id="episode-page">
      <div>
        <Card className={classes.root} square={true} id="episode-card">
          <CardMedia
            component="img"
            alt={episodeData.title}
            height="500"
            image={
              (episodeData.image || episodeData.show_image) +
              "?fit=crop&h=250&w=1080&crop=entropy"
            }
            title={episodeData.title}
          />
          <CardContent class="episode-card-content">
            <Typography
              style={{ textTransform: "uppercase" }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {episodeData.title}
            </Typography>
            <Typography
              style={{ fontStyle: "italic", padding: "5px" }}
              variant="body2"
              component="p"
            >
              <Link
                to={`/${props.broadcasterData.handle}/${episodeData.show_id}`}
                style={{ color: "inherit", fontStyle: "italic" }}
              >
                {episodeData.showName},
              </Link>
                {' '}episode {episodeData.episode_number}
            </Typography>
            <Typography style={{ padding: "5px" }}>{episodeData.release_date ? episodeData.release_date.slice(0,10) : null}</Typography>
            <Typography
              style={{ padding: "5px" }}
              gutterBottom
              variant="body2"
              component="p"
            >
              {episodeData.description}
            </Typography>
            {props.isLoggedIn && (
              <EpisodeForm
                setEpisodeData={setEpisodeData}
                text={"Edit Episode"}
                broadcasterId={props.broadcasterData.id}
                broadcasterData={props.broadcasterData}
                episodeData={episodeData}
                showId={episodeData.show_id}
              />
            )}
          </CardContent>
        </Card>
      </div>
      <div id="player-container">
        <Player className="player" embedCode={episodeCode} />
      </div>
    </div>
  );
}
