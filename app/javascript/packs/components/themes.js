import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import {
  deepPurple,
  amber,
  deepOrange,
  grey,
  green,
  red,
  brown,
  teal,
  white
} from "@material-ui/core/colors";
import { black } from "material-ui/styles/colors";

// if you add a new theme, it will need to be added to this array
export const themeNames = [
  {
    text: "Purple Rain", 
    name: "themeA"
  },
  {
    text: "Under the Sea", 
    name: "themeB"
  },
  {
    text: "Tomato Soup",
    name: "themeC"
  }
];

// import { createMuiTheme } from '@material-ui/core/styles';
// import { green, grey, red } from '@material-ui/core/colors';

const themeA = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: amber[500],
      contrastText: deepPurple[900],
    },
  },
  typography: {
    fontFamily: "'Arial Black', 'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
  }
});

themeA.props = {
  MuiButton: {
    disableElevation: true,
  },
};

themeA.overrides = {
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

const themeB = createMuiTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: grey[200],
      contrastText: teal[900],
    },
  },
  typography: {
    fontFamily: "Verdana, Arial, sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Verdana', sans-serif",
  }
});

themeB.props = {
  MuiButton: {
    disableElevation: true,
  },
};

themeB.overrides = {
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
  MuiPaper: {
    root: {
      backgroundColor: 'white'
    }
  }
};

const themeC = createMuiTheme({
  palette: {
    primary: {
      main: red[500]
    },
    secondary: {
      main: '#000000',
      contrastText: red[900],
    },
  },
  typography: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
  }  
});

themeC.props = {
  MuiButton: {
    disableElevation: true,
  },
};

themeC.overrides = {
  MuiButton: {
    root: {
      borderRadius: 0,
      textTransform: "none"
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: grey[300],
        color: red[900],
      },
    },
    containedSecondary: {
      fontWeight: 700,
    },
  },
  MuiTypography: {
    root: {
      color: black
    }
  }
};

const themeWelcome = createMuiTheme({
  palette: {
    primary: {
      // this line affects top nav bar on welcome page and create my site button
      main: grey[900]
    },
    secondary: {
      main: '#FFFFFF',
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

const useThemeA = makeStyles(() => ({
  root: {
    width: "100%",
    background: 'linear-gradient(to bottom, #272c2F 0%, #673AB7 100%)',
  },
}));

const useThemeB = makeStyles(() => ({
  root: {
    width: "100%",
    // background: '#009688'
    background: 'linear-gradient(to bottom, #272c2f 0%, #009688 100%)'

  },
}));

const useThemeC = makeStyles(() => ({
  root: {
    width: "100%",
    background: 'white'
    // background: 'linear-gradient(to bottom, #272c2f 0%, #FF0000 100%)'
  },
}));

const useThemeWelcome = makeStyles(() => ({
  root: {
    width: "100%",
    background: '#272c2f'
  },
}));

// this is the only function you need to import and call for components where classes are being used to style

const applyTheme = (broadcasterTheme) => {
  if (broadcasterTheme === 'themeA') {
    return useThemeA();
  } else if (broadcasterTheme === 'themeB') {
    return useThemeB();
  } else if (broadcasterTheme === 'themeC'){
    return useThemeC();
  } else {
    return useThemeWelcome();
  };
}

export { themeA, themeC, themeB, themeWelcome, applyTheme };
