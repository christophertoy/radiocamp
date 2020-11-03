import React from 'react';
import { Typography, Container, Box } from "@material-ui/core";
import NavBar from './NavBar';
import BroadcasterForm from './BroadcasterForm';
import { ThemeProvider } from '@material-ui/core';
import { themeOrangeGrey, themeTeal } from './themes'


export default function Welcome(props) {

  return (
    <div>
      <ThemeProvider theme={themeOrangeGrey}>
      <NavBar title="RadioCamp" handleLogin={props.handleLogin}/> 
      <Container style={{ marginTop: '200px', textAlign: 'center' }}>
        <img src="./images/logo.png" width="900px"/>
        <Typography variant="h4" style={{color: "white"}}>
          Join RadioCamp you will be so happy!
        </Typography>
        <Box style={{ marginTop: '50px' }}><BroadcasterForm  loginAndRedirect={props.loginAndRedirect}/></Box>
      </Container>
      </ThemeProvider>
    </div>
  )
}