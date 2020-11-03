import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import {
  deepPurple,
  amber,
  deepOrange,
  grey,
  green,
  red,
  teal,
} from "@material-ui/core/colors";

// if you add a new theme, it will need to be added to this array
export const themeNames = [
  {
    text: "Lakers", 
    name: "themePurpleYellow"
  },
  {
    text: "Orange Juice",
    name: "themeOrangeGrey"
  },
  {
    text: "Under the Sea", 
    name: "themeTeal"
  },
];

// import { createMuiTheme } from '@material-ui/core/styles';
// import { green, grey, red } from '@material-ui/core/colors';

const themePurpleYellow = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: amber[500],
      contrastText: deepPurple[900],
    },
  },
});

themePurpleYellow.props = {
  MuiButton: {
    disableElevation: true,
  },
};

themePurpleYellow.overrides = {
  MuiButton: {
    root: {
      borderRadius: 0,
      textTransform: "none",
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: amber[500],
        color: deepPurple[900],
      },
    },
    containedSecondary: {
      fontWeight: 700,
    },
  },
};

const themeTeal = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: grey[200],
      contrastText: teal[900],
    },
  },
});

themeTeal.props = {
  MuiButton: {
    disableElevation: true,
  },
};

themeTeal.overrides = {
  MuiButton: {
    root: {
      borderRadius: 0,
      textTransform: "none",
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: grey[200],
        color: teal[900],
      },
    },
    containedSecondary: {
      fontWeight: 700,
    },
  },
};

const themeOrangeGrey = createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[500],
    },
    secondary: {
      main: grey[300],
      contrastText: deepOrange[900],
    },
  },
});

themeOrangeGrey.props = {
  MuiButton: {
    disableElevation: true,
  },
};

themeOrangeGrey.overrides = {
  MuiButton: {
    root: {
      borderRadius: 0,
      textTransform: "none",
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: grey[300],
        color: deepOrange[900],
      },
    },
    containedSecondary: {
      fontWeight: 700,
    },
  },
};

const themeWelcome = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: grey[200],
      contrastText: teal[900],
    },
  },
});

themeWelcome.props = {
  MuiButton: {
    disableElevation: true,
  }
};

themeWelcome.overrides = {
  MuiButton: {
    root: {
      borderRadius: 0,
      textTransform: "none",
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: grey[200],
        color: teal[900],
      },
    },
    containedSecondary: {
      fontWeight: 700,
    },
  },
};


// these functions allow further definition of styles where the overrides for createMuiTheme (defined above) are not sufficient

const useThemePurple = makeStyles(() => ({
  root: {
    width: "100%",
    background: 'linear-gradient(to bottom, #272c2F 0%, #673AB7 100%)',
  },
}));

const useThemeOrange = makeStyles(() => ({
  root: {
    width: "100%",
    background: 'linear-gradient(to bottom, #272c2f 0%, #FF5722 100%)'
  },
}));

const useThemeTeal = makeStyles(() => ({
  root: {
    width: "100%",
    background: 'linear-gradient(to bottom, #272c2f 0%, #009688 100%)'
  },
}));

const useThemeWelcome = makeStyles(() => ({
  root: {
    width: "100%",
    background: 'linear-gradient(to bottom, #272c2f 0%, #212121 100%)'
  },
}));

// this is the only function you need to import and call for components where classes are being used to style

const applyTheme = (broadcasterTheme) => {
  if (broadcasterTheme === 'themePurpleYellow') {
    return useThemePurple();
  } else if (broadcasterTheme === 'themeOrangeGrey') {
    return useThemeOrange();
  } else if (broadcasterTheme === 'themeTeal'){
    return useThemeTeal();
  } else {
    return useThemeWelcome();
  };
}

// all the code below was copied from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/premium-themes/onepirate/modules/theme.js

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#69696a",
      main: "#28282a",
      dark: "#1e1e1f",
    },
    secondary: {
      light: "#fff5f8",
      main: "#ff3366",
      dark: "#e62958",
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e",
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      xLight: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: "uppercase",
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
};

export { themePurpleYellow, themeOrangeGrey, themeTeal, themeWelcome, applyTheme };
