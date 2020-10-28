import React from 'react';
import { BrowserRouter, Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import Aloha from './Aloha';
import NavBar from './NavBar';
import { useEffect, useState } from "react";
import axios from "axios";
import ShowListItem from './ShowListItem';
import Site from './Site';
import Welcome from './Welcome';

export default function App(props) {
  const [shows, setShows] = useState([])
  const [loggedInStatus, setLoggedInStatus] = useState("Not Logged In")
  const [user, setUser] = useState({});

  // useEffect(async ()=> {
  //   const resp = await axios.get('/shows.json')
  //   console.log(resp.data);
  //   setShows(resp.data);
  // },[]);

  const handleLogin = (data) => {
    setLoggedInStatus("Logged In")
    setUser(data.user)
  }

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path ='/'> 
            <Welcome
            handleLogin={handleLogin}
            loggedInStatus={loggedInStatus}
            loggedInUser={user}/> 
          </Route>
          <Route path = "/:broadcasterHandle">
            <Site />
          {/* <Route path = '/:broadcasterHandle/' render = { (props) => {
            return <Site handle={props.match.params.broadcasterHandle} />
          } }/> */}
          </Route>
          {/* <Route path = '/:broadcasterhandle/' render = { (props) => {
            return ( shows.map( show => <ShowListItem title={show.name} description={show.description}/>) )
          } }/> */}
        </Switch>
      </BrowserRouter>
  )
}