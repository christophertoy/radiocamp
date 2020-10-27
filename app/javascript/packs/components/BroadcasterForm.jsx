import React, { useState } from "react";
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
import { themeOrangeGrey } from "./themes";

export default function BroadcasterForm(props) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
              <Input id="handle" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">
                Enter your station's handle or call sign.
              </FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input id="name" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">
                Enter your station's name
              </FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="description">Description</InputLabel>
              <Input id="description" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">
                Enter a short summary that describes your station.
              </FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="station-logo">Logo</InputLabel>
              <Input id="station_logo" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">
                Enter a URL that points to your station's logo
              </FormHelperText>
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
  );
}
