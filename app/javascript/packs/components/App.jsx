import React from "react";
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Site from "./Site";
import Welcome from "./Welcome";

export default function App(props) {
  const [user, setUser] = useState("");

  useEffect(async () => {
    await setUser(localStorage.getItem("user"));
  }, []);

  const history = useHistory();
    
  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.setItem("user", null);
    setUser(null);
    // history.push(`/`);
  };

  const handleLogin = (data) => {
    event.preventDefault();
    setUser(data);
    localStorage.setItem("user", data);
    history.push(`/${data}`);
  };

  const handleCreateBroadcaster = (data) => {
    axios
      .post("/broadcasters", data)
      .then(function (response) {
        setUser(data.handle);
        localStorage.setItem("user", data.handle);
        history.push(`/${data.handle}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Switch>
      <Route exact path="/">
        <Welcome
          handleCreateBroadcaster={handleCreateBroadcaster}
          handleLogin={handleLogin}
        />
      </Route>
      <Route path="/:broadcasterHandle">
        <Site currentUser={user} handleLogOut={handleLogOut}/>
        {/* <Route path = '/:broadcasterHandle/' render = { (props) => {
            return <Site handle={props.match.params.broadcasterHandle} />
          } }/> */}
      </Route>
      {/* <Route path = '/:broadcasterhandle/' render = { (props) => {
            return ( shows.map( show => <ShowListItem title={show.name} description={show.description}/>) )
          } }/> */}
    </Switch>
  );
}
