import React from 'react';
import { BrowserRouter, Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import Aloha from './Aloha';
import NavBar from './NavBar';
import { useEffect, useState } from "react";
import axios from "axios";
import ShowListItem from './ShowListItem';
import List from './List';

export default function Broadcaster(props) {
  // const [shows, setShows] = useState([])
  // useEffect(async ()=> {
  //   const resp = await axios.get('/shows.json')
  //   console.log(resp.data);
  //   setShows(resp.data);
  // },[]);
  const [name, setName] = useState('');
  const [broadcasterId, setBroadcasterId] = useState(0);

  useEffect(async ()=> {
    const resp = await axios.get('/broadcasters.json')
    const thisBroadcaster = resp.data.find( x => x.handle === props.handle );
    setName(thisBroadcaster.name);
    setBroadcasterId(thisBroadcaster.id);
  },[]);

  return (
    <div>
      <NavBar title={name}/>
      <List broadcasterId={broadcasterId}/>
    </div>
  )
}