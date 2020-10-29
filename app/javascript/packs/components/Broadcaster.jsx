import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import Aloha from "./Aloha";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowListItem from "./ShowListItem";
import ShowList from "./ShowList";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShowForm from "./ShowForm";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});



export default function Site(props) {
  const classes = useStyles();
  const history = useHistory();
  
  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.setItem("user", null);
    history.push('/');
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2014/02/shutterstock_163052525-730x342.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.broadcasterData.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.broadcasterData.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Contact Me
          </Button>
        </CardActions>
      </Card>
      {props.currentUser === props.broadcasterData.handle && (
        <ShowForm broadcasterId={props.broadcasterData.id} />
      )}
      {props.currentUser === props.broadcasterData.handle && (
        <Button variant="outlined" color="primary" onClick={handleLogOut}>
        Logout
        </Button>
      )}
      <ShowList
        broadcasterId={props.broadcasterData.id}
        broadcasterData={props.broadcasterData}
      />
    </div>
  );
}
