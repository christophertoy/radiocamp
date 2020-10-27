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
import List from "./List";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Broadcaster from "./Broadcaster";
import Show from "./Show";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});

export default function Site(props) {
  const classes = useStyles();

  let { broadcasterHandle } = useParams();

  const [name, setName] = useState("");
  const [broadcasterData, setBroadcasterData] = useState({});

  let match = useRouteMatch();

  useEffect(async () => {
    const resp = await axios.get("/broadcasters.json");
    const thisBroadcaster = resp.data.find((x) => x.handle === broadcasterHandle);
    setName(thisBroadcaster.name);
    setBroadcasterData(thisBroadcaster);
  }, []);

  console.log(match);

  return (
    <div>
      <NavBar title={name} />
      <Switch>
        <Route exact path={match.path}>
          <Broadcaster broadcasterData={broadcasterData} />
        </Route>
        <Route path={`${match.path}/:showId`}>
          <Show />
        </Route>
      </Switch>
    </div>
  );
}
