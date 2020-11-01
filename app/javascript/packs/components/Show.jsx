import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import Aloha from "./Aloha";
import NavBar from "./NavBar";
import EpisodeList from "./EpisodeList";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowListItem from "./ShowListItem";
import ShowList from "./ShowList";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EpisodeForm from "./EpisodeForm";
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});

export default function Show(props) {
  const classes = useStyles();

  const [showData, setShowData] = useState({});

  // was on left
  const [episodes, setEpisodes] = useState([]);
  let { showId } = useParams();

  useEffect(async () => {
    const resp = await axios.get("/episodes.json");
    const filteredData = resp.data.filter(x => x.show_id == showId);
    // sorts episodes by episode number, highest number first 
    setEpisodes(filteredData.sort((a, b) => {
      if (a.release_date > b.release_date) return -1;
      if (a.release_date < b.release_date) return 1;
      return 0;
    }
    ));
    console.log(filteredData);
  }, []);
  //----

  const match = useRouteMatch();

  const history = useHistory();

  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.setItem("user", null);
    history.push("/");
  };

  useEffect(async () => {
    const resp = await axios.get(`/shows/${showId}.json`);
    // const thisBroadcaster = resp.data.find((x) => x.handle === props.handle);
    setShowData(resp.data);
  }, []);

  return (
    <div>
      <Card square={true} className={classes.root} id="show-card">
        <CardMedia
          component="img"
          alt={showData.name + 'header image'}
          height="250"
          image={showData.image+'?fit=crop&h=250&w=1080&crop=entropy'}
          title={showData.name}
        />
        <CardContent class="show-card-content">
          <Typography gutterBottom variant="h5" component="h2">
            {showData.name}
          </Typography>
          <Typography variant="body2" component="p">
            {showData.description}
          </Typography>
        </CardContent>
      </Card>
      <Divider></Divider>
      <EpisodeList 
        currentUser={props.currentUser}
        setEpisodes={setEpisodes}
        episodes={episodes}
        broadcasterData={props.broadcasterData}
        showId={showId} />
    </div>
  );
}
