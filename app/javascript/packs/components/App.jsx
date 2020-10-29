import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import Aloha from "./Aloha";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowListItem from "./ShowListItem";
import Site from "./Site";
import Welcome from "./Welcome";

export default function App(props) {
  const [user, setUser] = useState("");

  useEffect(async () => {
    await setUser(localStorage.getItem("user"));
  }, []);

  const history = useHistory();
  const handleSubmit = (data) => {
    event.preventDefault();
    setUser(data);
    localStorage.setItem("user", data);
    console.log("data", data);
    history.push(`/${data}`);
  };

  return (
    <Switch>
      <Route exact path="/">
        <Welcome handleSubmit={handleSubmit} />
      </Route>
      <Route path="/:broadcasterHandle">
        <Site currentUser={user}/>
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
