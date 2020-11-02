import React, { useState } from "react";
import axios from "axios";
import {
  FormGroup,
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
  Button,
  ThemeProvider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
// props will need to contain broadcaster ID

export default function ShowForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");
  const [host, setHost] = useState("");
  const [genre, setGenre] = useState("");
  const [open, setOpen] = useState(false);


  const reset = function () {
    setName("");
    setDescription("");
    setLogo("");
    setHost("")
    setGenre("");
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    let show = {
      name,
      description,
      image: logo,
      genre,
      host,
      broadcaster_id: props.broadcasterId,
    };

    if (!show.image) {
      show = {...show, image: "https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg"}
    }

    axios
      .post("/shows.json", { show })
      .then((response) => {
        show.id = response.data.id;
        props.setShows((prev) => {
          return [show, ...prev]
        })
      })
      .catch((error) => {
        console.log(error);
      });

    reset();
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  return (
    <ThemeProvider >

      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add a show
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Show Information</DialogTitle>
        <DialogContent>

          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                id="name"
                aria-describedby="my-helper-text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <FormHelperText id="my-helper-text">
                Enter the name of your show
          </FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="description">Description</InputLabel>
              <Input
                id="description"
                aria-describedby="my-helper-text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              <FormHelperText id="my-helper-text">
                Enter a short summary that describes your show.
          </FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="host">Host</InputLabel>
              <Input
                id="host"
                aria-describedby="my-helper-text"
                value={host}
                onChange={(event) => setHost(event.target.value)}
              />
              <FormHelperText id="my-helper-text">
                Enter the name of your show's host
          </FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="genre">Genre</InputLabel>
              <Input
                id="genre"
                aria-describedby="my-helper-text"
                value={genre}
                onChange={(event) => setGenre(event.target.value)}
              />
              <FormHelperText id="my-helper-text">
                Enter your show's genre
          </FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="show-logo">Logo</InputLabel>
              <Input
                id="show_logo"
                aria-describedby="my-helper-text"
                value={logo}
                onChange={(event) => setLogo(event.target.value)}
              />
              <FormHelperText id="my-helper-text">
                Enter a URL that points to your show's logo
          </FormHelperText>
            </FormControl>

            <DialogActions>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Create Show
              </Button>
              <Button variant="contained" color="secondary" onClick={handleClose}>
                Cancel
              </Button>
            </DialogActions>

          </FormGroup>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}
