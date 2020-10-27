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
} from "@material-ui/core";
import { themePurpleYellow } from "./themes";
// props will need to contain broadcaster ID




export default function ShowForm(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');

  const reset = function () {
    setName('');
    setDescription('');
    setLogo('');
  }
  
  const handleSubmit = function (event) {
    event.preventDefault();

    const show = {
      name,
      description,
      logo
    }

    axios.post(`http://localhost:3000/shows`, { show })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    console.log("name:", name, "description:", description, "logo:", logo )
    reset();

  }

  return (
    <ThemeProvider theme={themePurpleYellow}>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" aria-describedby="my-helper-text" 
             value={name}
             onChange={ (event) => setName(event.target.value)}
          />
          <FormHelperText id="my-helper-text">
            Enter the name of your show
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="description">Description</InputLabel>
          <Input id="description" aria-describedby="my-helper-text" 
              value={description}
              onChange={ (event) => setDescription(event.target.value)}
          />
          <FormHelperText id="my-helper-text">
            Enter a short summary that describes your show.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="show-logo">Logo</InputLabel>
          <Input id="show_logo" aria-describedby="my-helper-text" 
              value={logo}
              onChange={ (event) => setLogo(event.target.value)}
          />
          <FormHelperText id="my-helper-text">
            Enter a URL that points to your show's logo
          </FormHelperText>
        </FormControl>

        <Button variant="contained" color="primary" onClick={ handleSubmit }>
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
