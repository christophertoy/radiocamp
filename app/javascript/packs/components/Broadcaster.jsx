import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowList from "./ShowList";
import BroadcasterForm from "./BroadcasterForm";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider
} from "@material-ui/core";

export default function Broadcaster(props) {
  
  const history = useHistory();

  const [shows, setShows] = useState([]);

  useEffect(async () => {
    const resp = await axios.get("/shows.json");
    const filteredData = resp.data.filter(
      (x) => x.broadcaster_id === props.broadcasterData.id
    );
    // sorts shows alphabetically by name
    setShows(
      filteredData.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
    );
  }, [props.broadcasterData.id]);

  const saveBroadcaster = (broadcasterData) => {
    // event.preventDefault();
    // const broadcaster = {
    //   handle,
    //   name,
    //   description,
    //   logo,
    //   theme,
    //   authenticity_token: "7Q6hhcViECR6WibzTIdQVwufBs8K7C+MfzrpIeW+SlUrwEvXHzjZuOp42FAf+0vRLV36n27++5iLTHuV+gS/Eg=="
    // }
    axios.put(`/broadcasters/${broadcasterData.id}.json`, { broadcasterData })
    .then(function (response) {
      setBroadcasterData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    reset();
    handleClose();

  };

  const editBroadcaster = function(broadcaster) {
  }

  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.setItem("user", null);
    history.push("/");
  };

  return (
    <div id="broadcaster-page-container">
      <Card style={{marginTop:"55px"}} id="broadcaster-card" square={true}>
        <CardMedia
          component="img"
          alt={props.broadcasterData.name}
          height="500"
          image={props.broadcasterData.logo + '?fit=crop&h=250&w=1080&crop=entropy' || "https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg"}
          title={props.broadcasterData.name}
        />
        <CardContent class="broadcaster-card-content">
          <Typography gutterBottom variant="h5" component="h2">
            {props.broadcasterData.name}
          </Typography>
          <Typography style={{margin:"15px"}} variant="body2" component="p">
            {props.broadcasterData.description}
          </Typography>
          {props.isLoggedIn && (
            <BroadcasterForm
              broadcasterData={props.broadcasterData}
              text="Customize Site"
              setBroadcasterData={props.setBroadcasterData}
              handleCreateBroadcaster={saveBroadcaster}
            />
          )}
        </CardContent>        
      </Card>
      <Divider></Divider>
      <ShowList
        shows={shows}
        broadcasterId={props.broadcasterData.id}
        broadcasterData={props.broadcasterData}
        currentUser={props.currentUser}
        setShows={setShows}
      />
    </div>
  );
}
