import React, { useState, useEffect } from 'react';
import {
  Button,
  
  TextField,
  makeStyles,
  Select,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ThemeProvider

} from "@material-ui/core";
import { themeOrangeGrey } from "./themes";
import axios from 'axios';

// junk data - remove once API calls are in place

const jsonShows = [
  {
    id: 1,
    name: "Modern Expansion",
    description: null,
    image: null,
    genre: null,
    broadcaster_id: 1,
    created_at: "2020-10-25T20:36:31.152Z",
    updated_at: "2020-10-25T20:36:31.152Z",
    url: "http://localhost:3000/shows/1.json"
  },
  {
    id: 2,
    name: "Contemporary Few",
    description: null,
    image: null,
    genre: null,
    broadcaster_id: 1,
    created_at: "2020-10-25T20:36:31.168Z",
    updated_at: "2020-10-25T20:36:31.168Z",
    url: "http://localhost:3000/shows/2.json"
  },
  {
    id: 3,
    name: "Syntactic Yacht",
    description: null,
    image: null,
    genre: null,
    broadcaster_id: 2,
    created_at: "2020-10-25T20:36:31.177Z",
    updated_at: "2020-10-25T20:36:31.177Z",
    url: "http://localhost:3000/shows/3.json"
  },
  {
    id: 4,
    name: "Robots in Plain Sight",
    description: null,
    image: null,
    genre: null,
    broadcaster_id: 1,
    created_at: "2020-10-25T20:36:31.152Z",
    updated_at: "2020-10-25T20:36:31.152Z",
    url: "http://localhost:3000/shows/1.json"
  }
];

// dummy placeholder function returns a simplified show object
// there will need to be a call to API here

// { Episode Record
//   id: 1,
//   title: "The Modern Campfire",
//   description: "Examining isolation and connection in the age of Zoom parties",
//   episode_url: "http://www.example.com",
//   release_date: "2020-10-25T20:20:31.311Z",
//   show_id: 1,
//   created_at: "2020-10-25T20:20:31.319Z",
//   updated_at: "2020-10-25T20:20:31.319Z",
//   url: "http://localhost:3000/episodes/1.json"
//   },

export default function EpisodeForm(props) {

  const [shows, setShows] = useState([]);

  useEffect(async () => {
    const resp = await axios.get("/shows.json");
    const allShows = resp.data.filter(x => x.broadcaster_id === 1);
    console.log(allShows);
    setShows(allShows);
  }, []);

    // const resp = await axios.get("/shows.json");
    // const allShows = resp.data.filter(show => show.broadcaster_id === 1);   

    // const getShows = () => {
    //   return allShows.map(show => {
    //   return { id: show.id, name: show.name }
    //   });
    // };
  
  const [showId, setShowId] = useState("");
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [releaseDate, setReleaseDate] = useState("2020-12-01");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };  

  const reset = function () {
    setShowId("");
    setTitle("");
    setDescription("");
    setUrl("");
    setReleaseDate("");
  };
  
  const handleSubmit = function (event) {
    event.preventDefault();
    

    const episode = {
      show_id: showId, 
      title,
      description,
      episode_url: url,
      release_date: releaseDate,
    };

    console.log(episode)

    axios
      .post("/episodes", { episode })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    reset();
    handleClose();
  };

  console.log(shows);

  return (
    <ThemeProvider theme={themeOrangeGrey}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add an episode
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Episode</DialogTitle>
        <DialogContent>
          <FormGroup>

            <FormControl>
              <InputLabel id="demo-simple-select-label">Show</InputLabel>
              <Select
                type="select"
                name="showName"
                label="Show"
                id="demo-simple-select"
                value={showId}
                onChange={(event) => setShowId(event.target.value)}
              >
              <MenuItem value="Choose a Show"></MenuItem>
                {
                  shows.map(show =>
                    <MenuItem
                      key={show.id}
                      value={show.id}>
                      {show.name}
                    </MenuItem>)
                }
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="title">Episode Title</InputLabel>
              <Input
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                id="title"
                aria-describedby="my-helper-text"
              />             
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="description">Episode Description</InputLabel>
              <Input
                multiline
                rows={4}
                name="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />              
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="episode_url">Episode URL</InputLabel>
              <Input
                name="episode_url"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
              />            
            </FormControl>

            <FormControl>
            <InputLabel htmlFor="release_date">Release Date</InputLabel>
              <Input
                name="release_date"
                type="date"
                value={releaseDate}
                onChange={(event) => setReleaseDate(event.target.value)}
              />
            </FormControl>

            <DialogActions>
              <Button onClick={handleSubmit} color="primary">
                Create Episode
              </Button>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
    
          </FormGroup>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  )
};