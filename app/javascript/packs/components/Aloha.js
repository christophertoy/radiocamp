import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import ShowListItem from './ShowListItem';

export default function Aloha(props) {
  const [name, setName] = useState('')
  useEffect(async ()=> {
    const resp = await axios.get('/episodes/1.json')
    console.log(resp.data);
    setName(resp.data.title);
  },[]);

  return (<div>
    Hello {name}!
    {/* <Link href="/react/turtles" onClick={preventDefault}>{props.handle}</Link> */}
    <Link to="turtles" component={RouterLink} >Link</Link>
    <ShowListItem></ShowListItem>
  </div>
  )
}