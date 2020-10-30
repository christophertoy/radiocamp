import React, { useState, useEffect } from 'react';
import {
  Button,
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

const getCurrentDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return today = yyyy + '-' + mm + '-' + dd;
};

export default function EpisodeForm(props) {

  const [shows, setShows] = useState([]); 
  const [showId, setShowId] = useState(props.showId || "");
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [releaseDate, setReleaseDate] = useState(getCurrentDate());
  
  useEffect(async () => {
    const resp = await axios.get("/shows.json");
    const allShows = resp.data.filter(x => x.broadcaster_id === props.broadcasterId);
    setShows(allShows);
    setShowId(props.showId);
  }, [props.broadcasterId, props.showId]);  

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
    setReleaseDate(getCurrentDate());
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

    axios
      .post("/episodes", { episode })
      .then((response) => {
        props.setEpisodes((prev) => {
          return [...prev, episode]
        });
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
    handleClose();
  };

  return (
    <ThemeProvider>
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
                      value={show.id}
                      selected={props.showId === show.id}
                      >
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
