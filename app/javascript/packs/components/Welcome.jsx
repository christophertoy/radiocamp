import React from 'react';
import { BrowserRouter, Switch, Route, useParams, useRouteMatch, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import NavBar from './NavBar';
import { useEffect, useState } from "react";
import axios from "axios";
import showList from './ShowList';
import BroadcasterForm from './BroadcasterForm';
import EpisodeForm from "./EpisodeForm";
import { ThemeProvider } from '@material-ui/core';
import { theme, themePurpleYellow, themeOrangeGrey } from './themes'
import Login from "./Login"


export default function Welcome(props) {

  return (
    <div>
      <ThemeProvider theme={themeOrangeGrey}>
      <NavBar title="RadioCamp" handleLogin={props.handleLogin}/> 
      <Container style={{ marginTop: '80px', textAlign: 'center' }}>
        <Typography variant="h4" >
          Join RadioCamp you will be so happy!
        </Typography>
        <Box style={{ marginTop: '50px' }}><BroadcasterForm  handleCreateBroadcaster={props.handleCreateBroadcaster}/></Box>
      </Container>
      </ThemeProvider>
    </div>
  )
}