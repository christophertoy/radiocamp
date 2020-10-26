import { createMuiTheme } from "@material-ui/core";
import { deepPurple, amber, deepOrange, grey } from "@material-ui/core/colors"

const themePurpleYellow = createMuiTheme ({

  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: amber[500],
      contrastText: deepPurple[900],
    }
  }
});

themePurpleYellow.props = {
  MuiButton: {
    disableElevation: true
  }
};

themePurpleYellow.overrides = {
  MuiButton: {
    root: {
      borderRadius: 0,
      textTransform: "none"      
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: amber[500],
        color: deepPurple[900]
      }
    },
    containedSecondary: {
      fontWeight: 700
    }
  }
};

const themeOrangeGrey = createMuiTheme ({

  palette: {
    primary: {
      main: deepOrange[500],
    },
    secondary: {
      main: grey[500],
      contrastText: deepOrange[900],
    }
  }
});

themeOrangeGrey.props = {
  MuiButton: {
    disableElevation: true
  }
};

themeOrangeGrey.overrides = {
  MuiButton: {
    root: {
      borderRadius: 0,
      textTransform: "none"      
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: grey[500],
        color: deepOrange[900]
      }
    },
    containedSecondary: {
      fontWeight: 700
    }
  }
};


export { themePurpleYellow, themeOrangeGrey };