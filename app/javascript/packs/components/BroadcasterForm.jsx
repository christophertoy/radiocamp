import React, { useState } from "react";
import {
  MenuItem,
  Select,
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
import { themeOrangeGrey } from "./themes";
import axios from "axios";


// const emptyBroadcaster = {
//   handle: "",
//   name: "",
//   description: "",
//   logo: ""
// };

export default function BroadcasterForm(props) {
  // can the broadcaster state be contained in a single object instead of using state 5 times?
  //const [broadcaster, setBroadcaster] = useState(emptyBroadcaster);

  const [handle, setHandle] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("");

  const reset = () => {
    setHandle("");
    setName("");
    setDescription("");
    setLogo("");
  };

  const saveBroadcaster = (event) => {
    event.preventDefault();
    axios.post('/broadcasters.json', {
      handle,
      name,
      description,
      logo,
      theme,
      authenticity_token: "7Q6hhcViECR6WibzTIdQVwufBs8K7C+MfzrpIeW+SlUrwEvXHzjZuOp42FAf+0vRLV36n27++5iLTHuV+gS/Eg=="
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
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
    <ThemeProvider theme={themeOrangeGrey}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Create my site
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Broadcaster Information</DialogTitle>
          <DialogContent>
          
          <FormGroup>
            
            <FormControl>
              <InputLabel htmlFor="handle">Handle</InputLabel>
              <Input 
                name="handle" 
                id="handle" 
                aria-describedby="my-helper-text" 
                required={true}
                value={handle}
                onChange={(event) => setHandle(event.target.value)}
              />
              <FormHelperText id="my-helper-text">
                Enter your station's handle or call sign.
              </FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input 
                name="name"
                id="name" 
                aria-describedby="my-helper-text"
                required={true}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />              
            <FormHelperText id="my-helper-text">
                Enter your station's name
              </FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="description">Description</InputLabel>
              <Input 
                name="description" 
                id="description" 
                aria-describedby="my-helper-text"
                required={true}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              <FormHelperText id="my-helper-text">
                Enter a short summary that describes your station.
              </FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="station-logo">Logo</InputLabel>
              <Input name="logo"
                 id="station_logo" 
                 aria-describedby="my-helper-text"
                 required={true}
                 value={logo}
                 onChange={(event) => setLogo(event.target.value)}/>
              <FormHelperText id="my-helper-text">
                Enter a URL that points to your station's logo
              </FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel id="demo-simple-select-label">Theme</InputLabel>
              <Select
                type="select"
                name="showTheme"
                label="Theme"
                id="demo-simple-select"
                value={theme}
                onChange={(event) => setTheme(event.target.value)}
              >
                <MenuItem value="Choose a Theme"></MenuItem>
                {  
                ['themePurpleYellow', 'themeOrangeGrey'].map((theme, index) =>
                    <MenuItem
                      key={index}
                      value={theme}
                      // selected={props.showId === show.id}
                      >
                      {theme}
                    </MenuItem>)
                }
              </Select>
            </FormControl>

            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={saveBroadcaster} color="primary">
                Save
              </Button>          
            </DialogActions>
            
          </FormGroup>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
}
