import React from 'react';
import { Typography, Container, Box } from "@material-ui/core";
import NavBar from './NavBar';
import BroadcasterForm from './BroadcasterForm';
import { ThemeProvider } from '@material-ui/core';
import { themeWelcome } from './themes'

// const useStyles = makeStyles({
//   root: {
//     // maxWidth: 345,
//     backgroundColor: "#272C2F",
//   },
// });



export default function Welcome(props) {
  // const classes = useStyles();

  return (
    <div style={{backgroundColor: '#272c2f'}}>
      <ThemeProvider theme={themeWelcome} style={{backgroundColor: '#272c2f'}}>
      <NavBar title="RadioCamp" handleLogin={props.handleLogin} /> 
      <Container style={{ marginTop: '200px', textAlign: 'center', backgroundColor: '#272c2f' }}>
        <img src="./images/logo.png" width="900px"/>
        <Typography variant="h4" style={{color: "white"}}>
          Join RadioCamp you will be so happy!
        </Typography>
        <Box style={{ marginTop: '50px', backgroundColor: '#272c2f' }}><BroadcasterForm  loginAndRedirect={props.loginAndRedirect}/></Box>
      </Container>
      </ThemeProvider>
    </div>
  )
}