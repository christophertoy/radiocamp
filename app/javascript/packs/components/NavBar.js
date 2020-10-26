import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  // const classes = { menuButton: 'blank', title: 'blank' }

  const classes = useStyles();

  return (<div>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" className={classes.title}>
        RadioCamp
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
  </div>
  )
}