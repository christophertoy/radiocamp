import React from "react";
import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { themeC, themeA, themeB, themeWelcome } from "./themes";
import NavBar from "./NavBar";
import Episode from "./Episode";
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
  const themes = { themeC, themeA, themeB, themeWelcome };

  let { broadcasterHandle } = useParams();

  const [name, setName] = useState("");
  const [broadcasterData, setBroadcasterData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(broadcasterHandle === props.currentUser);

  const history = useHistory();
  let match = useRouteMatch();

  useEffect(() => {
    setIsLoggedIn(broadcasterHandle === props.currentUser);
  },[props.currentUser])

  useEffect(async () => {
    const resp = await axios.get("/broadcasters.json");
    const thisBroadcaster = resp.data.find((x) => x.handle === broadcasterHandle);
    setName(thisBroadcaster.name);
    setBroadcasterData(thisBroadcaster);
  }, []);

  return (
    <ThemeProvider theme={ themes[broadcasterData.theme] || themeWelcome}>
      <NavBar 
        currentUser={props.currentUser}
        broadcasterData={broadcasterData} 
        handleLogOut={props.handleLogOut}
        title={broadcasterData.name} />
      <Switch>
        <Route exact path={match.path}>
          <Broadcaster 
          isLoggedIn={isLoggedIn}
          currentUser={props.currentUser}
          setBroadcasterData={setBroadcasterData}
          broadcasterData={broadcasterData} />
        </Route>
        <Route path={`${match.path}/search`}>
          <Search broadcasterData={broadcasterData}/>
        </Route>
        <Route path={`${match.path}/:showId/:episodeId`}>
          <Episode isLoggedIn={isLoggedIn} broadcasterData={broadcasterData}/>
        </Route>
        <Route path={`${match.path}/:showId`}>
          <Show
          currentUser={props.currentUser} 
          isLoggedIn={isLoggedIn}
          broadcasterId={broadcasterData.id} 
          broadcasterData={broadcasterData}/>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
