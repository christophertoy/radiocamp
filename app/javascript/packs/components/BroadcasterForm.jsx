import React from "react";
import axios from "axios";
import { FormGroup, FormControl, InputLabel, FormHelperText, Input, Button, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { deepPurple, amber } from "@material-ui/core/colors"


// the code for theme below needs to be broken out into its own file
const theme = createMuiTheme ({

  palette: {

    primary: {
      main: deepPurple[500],
    },

    secondary: {
      main: amber[500],
      contrastText: deepPurple[900],
    },

  },
})



export default function BroadcasterForm(props) {
  return (
    <ThemeProvider theme={theme}>
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


      <Button variant="contained" color="primary">Create Broadcaster</Button>
      <br/>
      <Button variant="contained" color="secondary">Cancel</Button>

      </FormGroup>
    </ThemeProvider>
  );
}
