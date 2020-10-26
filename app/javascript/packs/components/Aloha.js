import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import List from './List';

export default function Aloha(props) {
  const [name, setName] = useState('')
  useEffect(async ()=> {
    const resp = await axios.get('/episodes/1.json')
    console.log(resp.data);
    setName(resp.data.title);
  },[]);

  return (<div>
    Hello {name}!
  <Button>{props.handle}</Button>
    <List></List>
  </div>
  )
}