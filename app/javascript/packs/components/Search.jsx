import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useLocation
} from "react-router-dom";
import EpisodeList from "./EpisodeList";
import { useEffect, useState } from "react";
import axios from "axios";
import EpisodeListItem from "./EpisodeListItem";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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

  // const [episodeData, setEpisodeData] = useState({});
  // const match = useRouteMatch();
  // let { episodeId } = useParams();

  useEffect(async () => {
    // console.log('match', match);
    // console.log('params', params;
    if(props.broadcasterData.handle){
    const queryPath = `/${handle}/api/search${location.search}`;
    // console.log('queryPath', queryPath);
    const resp = await axios.get(queryPath);
    // console.log(resp.data);
    setSearchResults(resp.data);}
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