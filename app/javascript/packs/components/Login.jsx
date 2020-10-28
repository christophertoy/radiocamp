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
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import axios from "axios";

export default function login (props) {

  const [handle, setHandle] = useState("");
  // const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const history = useHistory();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //     history.push(`/${handle}`)
  //     handleClose();
  // }




  return (
    <ThemeProvider theme={themeOrangeGrey}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Login
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login Information</DialogTitle>
          <DialogContent>
          
          <FormGroup>
            
            <FormControl>
              <InputLabel htmlFor="hanlde">Handle</InputLabel>
              <Input 
                name="handle" 
                id="handle" 
                aria-describedby="my-helper-text" 
                required={true}
                value={handle}
                onChange={(event) => setHandle(event.target.value)}
              />
              <FormHelperText id="my-helper-text">
                Enter your handle
              </FormHelperText>
            </FormControl>

            {/* <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input 
                name="password"
                id="password" 
                aria-describedby="my-helper-text"
                required={true}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />              
            <FormHelperText id="my-helper-text">
                Enter your password
              </FormHelperText>
            </FormControl> */}

            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={() => props.handleSubmit(handle)} color="primary">
                Login
              </Button>          
            </DialogActions>
            
          </FormGroup>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
    
  )


}