import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import Episode from "./Episode";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { themeOrangeGrey, themePurpleYellow, themeTeal } from "./themes";
import Broadcaster from "./Broadcaster";
import Show from "./Show";
import Search from "./Search";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});

export default function Site(props) {
  const classes = useStyles();
  const themes = { themeOrangeGrey, themePurpleYellow, themeTeal };

  let { broadcasterHandle } = useParams();

  const [name, setName] = useState("");
  const [broadcasterData, setBroadcasterData] = useState({});

  const history = useHistory();
  let match = useRouteMatch();
    
  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.setItem("user", null);
    history.push(`/`);
  };

  useEffect(async () => {
    const resp = await axios.get("/broadcasters.json");
    const thisBroadcaster = resp.data.find((x) => x.handle === broadcasterHandle);
    setName(thisBroadcaster.name);
    setBroadcasterData(thisBroadcaster);
  }, []);

  return (
    <ThemeProvider theme={ themes[broadcasterData.theme] || themePurpleYellow}>
      <NavBar 
        currentUser={props.currentUser}
        broadcasterData={broadcasterData} 
        handleLogOut={handleLogOut}
        title={name} />
      <Switch>
        <Route exact path={match.path}>
          <Broadcaster 
          currentUser={props.currentUser}
          broadcasterData={broadcasterData} />
        </Route>
        <Route path={`${match.path}/search`}>
          <Search broadcasterData={broadcasterData}/>
        </Route>
        <Route path={`${match.path}/:showId/:episodeId`}>
          <Episode broadcasterData={broadcasterData}/>
        </Route>
        <Route path={`${match.path}/:showId`}>
          <Show
          currentUser={props.currentUser} 
          broadcasterId={broadcasterData.id} 
          broadcasterData={broadcasterData}/>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
