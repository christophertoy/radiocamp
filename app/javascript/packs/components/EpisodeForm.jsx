import React, { useState } from 'react';
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
const getShows = () => {
  return jsonShows.map(show => {
    return { id: show.id, name: show.name }
  });
};

const initialValues = {
  id: null,
  showName: "",
  title: "",
  description: "",
  episode_url: "",
  release_date: "2020-10-31"
};

export default function EpisodeForm() {

  const [shows, setShows] = useState(initialValues);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShows({
      ...shows,
      [name]: value
    })
  }

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
                value={shows.showName}
                onChange={handleInputChange}
              >
              <MenuItem value="Choose a Show"></MenuItem>
                {
                  getShows().map(show =>
                    <MenuItem
                      key={show.id}
                      value={show.name}>
                      {show.name}
                    </MenuItem>)
                }
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="title">Episode Title</InputLabel>
              <Input
                name="title"
                value={shows.title}
                onChange={handleInputChange}
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
                value={shows.description}
                onChange={handleInputChange}
              />              
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="episode_url">Episode URL</InputLabel>
              <Input
                name="episode_url"
                value={shows.episode_url}
                onChange={handleInputChange}
              />            
            </FormControl>

            <FormControl>
            <InputLabel htmlFor="release_date">Release Date</InputLabel>
              <Input
                name="release_date"
                type="date"
                value={shows.release_date}
                onChange={handleInputChange}
              />
            </FormControl>

            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Save
              </Button>
            </DialogActions>
    
          </FormGroup>
        </DialogContent>
      </Dialog>
    </ThemeProvider>

  )
};