import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Aloha from './Aloha';
import NavBar from './NavBar';

export default function App(props) {
  // const history = useHistory();

  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path ='/giraffe'> <p>Hi</p> </Route>
        <Route path = '/:broadcasterhandle/:catchphrase' render = { (props) => {
          return ( <Aloha handle={ props.match.params.broadcasterhandle +' '+ props.match.params.catchphrase } />  )
        } }/>
      </Switch>
    </div>
  )
}