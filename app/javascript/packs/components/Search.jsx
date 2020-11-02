import React from "react";
import {
  useLocation
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import EpisodeListItem from "./EpisodeListItem";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ShowListItem from "./ShowListItem";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});

export default function Search(props) {
  const classes = useStyles();
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);

  const handle = props.broadcasterData.handle;

  useEffect(async () => {
    if(props.broadcasterData.handle){
    const queryPath = `/${handle}/api/search${location.search}`;
    const resp = await axios.get(queryPath);
    setSearchResults(resp.data.results);}
  }, [props.broadcasterData.handle, location]);

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
            {/* {props.broadcasterData.name} */}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* {props.broadcasterData.description} */}
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
      {searchResults.map((x, i) => x.show_id ? 
        <EpisodeListItem
          key={i}
          episodeData={x}
          // id={x.id}
          // title={x.title}
          // description={x.description}
          // date={x.date}
          broadcasterData={props.broadcasterData}
          isSearchItem={true}
        /> : 
        <ShowListItem
          key={i}
          showData={x}
          // id={x.id}
          // name={x.name}
          // description={x.description}
          // date={x.date}
          broadcasterData={props.broadcasterData}
          isSearchItem={true}
        />)}
    </div>
  );
}