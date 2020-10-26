import React from "react";
import axios from "axios";
import {
  FormGroup,
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
  Button,
  ThemeProvider,
} from "@material-ui/core";
import { themePurpleYellow } from "./themes";
// props will need to contain broadcaster ID

export default function ShowForm(props) {
  return (
    <ThemeProvider theme={themePurpleYellow}>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Enter the name of your show
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="description">Description</InputLabel>
          <Input id="description" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Enter a short summary that describes your show.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="show-logo">Logo</InputLabel>
          <Input id="show_logo" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Enter a URL that points to your show's logo
          </FormHelperText>
        </FormControl>

        <Button variant="contained" color="primary">
          Create Show
        </Button>
        <br />
        <Button variant="contained" color="secondary">
          Cancel
        </Button>
      </FormGroup>
    </ThemeProvider>
  );
}
