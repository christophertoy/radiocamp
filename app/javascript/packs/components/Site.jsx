import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Aloha from "./Aloha";
import NavBar from "./NavBar";
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
import Broadcaster from "./Broadcaster";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});

export default function Site(props) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [broadcasterId, setBroadcasterId] = useState(0);
  const [broadcasterData, setBroadcasterData] = useState({});

  useEffect(async () => {
    const resp = await axios.get("/broadcasters.json");
    const thisBroadcaster = resp.data.find((x) => x.handle === props.handle);
    setName(thisBroadcaster.name);
    setBroadcasterId(thisBroadcaster.id);
    setBroadcasterData(thisBroadcaster);
  }, []);

  return (
    <div>
      <NavBar title={name} />
      <Broadcaster broadcasterData={broadcasterData} />
    </div>
  );
}
