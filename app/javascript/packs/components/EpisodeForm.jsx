import React, { useState, useEffect } from "react";
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
  ThemeProvider,
} from "@material-ui/core";
import axios from "axios";

const getCurrentDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return (today = yyyy + "-" + mm + "-" + dd);
};

export default function EpisodeForm(props) {
  // console.log(props.episodeData.title);

  const [shows, setShows] = useState([]);
  const [showId, setShowId] = useState(props.showId || "");
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [episodeNumber, setEpisodeNumber] = useState(0);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [releaseDate, setReleaseDate] = useState(getCurrentDate());
  const [image, setImage] = useState("");

  // Load episode info
  useEffect(async () => {
    if (props.episodeData) {
      reload();
    }
  }, [props.episodeData]);

  useEffect(async () => {
    const resp = await axios.get("/shows.json");
    const allShows = resp.data.filter(
      (x) => x.broadcaster_id === props.broadcasterId
    );
    setShows(allShows);
    setShowId(props.showId);
  }, [props.broadcasterId, props.showId, props.episodeData]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const reset = function () {
    if (props.episodeData) reload();
    else {
      setShowId("");
      setTitle("");
      setDescription("");
      setUrl("");
      setImage("");
      setReleaseDate(getCurrentDate());
    }
  };

  const reload = function () {
    setTitle(props.episodeData.title);
    setEpisodeNumber(parseInt(props.episodeData.episode_number));
    setDescription(props.episodeData.description);
    setUrl(props.episodeData.episode_url);
    setImage(props.episodeData.image);
    // use slice to remove time information, leaving year, month, and day
    setReleaseDate(props.episodeData.release_date.slice(0,10));
  };

  const handleSubmit = function (event) {
    event.preventDefault();

    const episode = {
      show_id: showId,
      title,
      description,
      episode_url: url,
      release_date: releaseDate,
      episode_number: episodeNumber,
      image
    };

    props.episodeData ? editEpisode(episode) : createEpisode(episode);
  };

  const editEpisode = function (episode) {
    axios
      .put(`/episodes/${props.episodeData.id}.json`, { episode })
      .then((response) => {
        // episode.id = response.data.id;
        // episode.image = response.data.image;
        // episode = { showId, title, description, url, releaseDate, episodeNumber }
        // props.setEpisodeData( prev => { return { ...prev, ...episode } });
        props.setEpisodeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    handleClose();
  };

  const createEpisode = function (episode) {
    axios
      .post("/episodes.json", { episode })
      .then((response) => {
        // episode.id = response.data.id;
        // episode.image = response.data.image;
        props.setEpisodes((prev) => {
          return [response.data, ...prev];
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
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        {props.text || "Add Episode"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth = {'md'}
      >
        <DialogTitle id="form-dialog-title">
          {props.text || "Add Episode"}
        </DialogTitle>
        <DialogContent>
          <FormGroup style={{width:"100%"}}>
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
                {shows.map((show) => (
                  <MenuItem
                    key={show.id}
                    value={show.id}
                    selected={props.showId === show.id}
                  >
                    {show.name}
                  </MenuItem>
                ))}
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
              <InputLabel htmlFor="image">Episode Image</InputLabel>
              <Input
                name="image"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="episode_url">Audio URL</InputLabel>
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

            <FormControl>
              <InputLabel htmlFor="episode_number">Episode Number</InputLabel>
              <Input
                name="episode_number"
                // type="date"
                value={episodeNumber}
                onChange={(event) => setEpisodeNumber(event.target.value)}
              />
            </FormControl>

            <DialogActions>
              <Button onClick={handleSubmit} color="primary">
                Submit
              </Button>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </FormGroup>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}
