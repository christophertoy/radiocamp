import React from 'react';
import { BrowserRouter, Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import Aloha from './Aloha';
import NavBar from './NavBar';
import { useEffect, useState } from "react";
import axios from "axios";
import ShowListItem from './ShowListItem';

export default function Broadcaster(props) {
  // const [shows, setShows] = useState([])
  // useEffect(async ()=> {
  //   const resp = await axios.get('/shows.json')
  //   console.log(resp.data);
  //   setShows(resp.data);
  // },[]);
  const [name, setName] = useState('')

  useEffect(async ()=> {
    const resp = await axios.get('/broadcasters.json')
    console.log(resp.data);
    setName(resp.data.find( x => x.handle === props.handle ).name);
  },[]);

  return (
    <div>
      <NavBar title={name}/>
        {/* <Route path = '/:broadcasterhandle/' render = { (props) => {
          return ( shows.map( show => <ShowListItem title={show.name} description={show.description}/>) )
        } }/> */}
    </div>
  )
}