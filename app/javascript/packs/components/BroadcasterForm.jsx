import React, { useEffect, useState } from "react";
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
  DialogTitle,
} from "@material-ui/core";
import { themeNames } from "./themes";
import axios from "axios";

export default function BroadcasterForm(props) {
  
  // can the broadcaster state be contained in a single object instead of using state 5 times?
  //const [broadcaster, setBroadcaster] = useState(emptyBroadcaster);

  const [handle, setHandle] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (props.broadcasterData) {
      reload();
    }
  }, [props.broadcasterData]);

  const reload = () => {
    const bData = props.broadcasterData;
    setHandle(bData.handle);
    setName(bData.name);
    setDescription(bData.description);
    setLogo(bData.image);
    setTheme(bData.theme);
  };

  const reset = () => {
    if (props.broadcasterData) reload();
    else {
      setHandle("");
      setName("");
      setDescription("");
      setLogo("");
    }
  };

  const saveBroadcaster = (broadcaster) => {
    props.broadcasterData
      ? editBroadcaster(broadcaster)
      : createBroadcaster(broadcaster);
  };

  const editBroadcaster = function (broadcaster) {
    axios
      .put(`/broadcasters/${props.broadcasterData.id}.json`, { broadcaster })
      .then(function (response) {
        props.setBroadcasterData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    handleClose();
  };

  const createBroadcaster = function (broadcaster) {
    axios
      .post("/broadcasters.json", { broadcaster })
      .then(function (response) {
        props.loginAndRedirect(response.data);
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
    setOpen(false);
    reset();
  };

  return (
    <div>
      <Button
        variant="outlined"
        size="large"
        color="secondary"
        onClick={handleClickOpen}
      >
        {props.text || "Create My Site"}
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth = {'md'}
      >
        <DialogTitle id="form-dialog-title">
          Broadcaster Information
        </DialogTitle>
        <DialogContent>
          <FormGroup style={{width:"100%"}}>
            <FormControl>
              <InputLabel htmlFor="handle">Handle</InputLabel>
              <Input
                name="handle"
                id="handle"
                aria-describedby="my-helper-text"
                required={true}
                value={handle}
                onChange={
                  props.broadcasterData
                    ? () => {}
                    : (event) => setHandle(event.target.value)
                }
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
                Enter your station's name.
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
              <InputLabel htmlFor="station-image">Image</InputLabel>
              <Input
                name="image"
                id="station_image"
                aria-describedby="my-helper-text"
                required={true}
                value={logo}
                onChange={(event) => setLogo(event.target.value)}
              />
              <FormHelperText id="my-helper-text">
                Enter an image URL that represents your station.
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
                themeNames.map((theme, index) =>
                    <MenuItem
                      key={index}
                      value={theme.name}
                    >
                      {theme.text}
                    </MenuItem>
                  )
                }
              </Select>
            </FormControl>

            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={() =>
                  saveBroadcaster({ handle, name, description, logo, theme })
                }
                color="primary"
              >
                Save
              </Button>
            </DialogActions>
          </FormGroup>
        </DialogContent>
      </Dialog>
    </div>
  );
}
