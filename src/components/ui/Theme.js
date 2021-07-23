import { createMuiTheme } from '@material-ui/core/styles';

const localGreen = '#006400';
const localBlue = '#0590A8';
const localCream = '#FFF1E6';
const localOrange = '#F53E0B';
const localDarkGreen = '#9FC09F';
const localGrey = '#868686';
const theme = createMuiTheme({
  palette: {
    common: {
      Green: localGreen,
      Blue: localBlue,
      Cream: localCream,
      Orange: localOrange,
      DarkGreen: localDarkGreen,
    },
    primary: {
      main: localGreen,
    },
    secondary: {
      main: localOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Cabin',
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Lato',
      textTransform: 'none',
      fontSize: '1rem',
      color: 'white',
    },
    h2: {
      fontFamily: 'Cabin',
      color: localGreen,
      fontWeight: '700',
      lineHeight: 1.5,
      fontSize: '2.5rem',
    },
    h3: {
      fontFamily: 'Cabin',
      fontWeight: '700',
      fontSize: '2.5rem',
      color: localGreen,
    },
    h4: {
      fontFamily: 'Cabin',
      color: localGreen,
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    subtitle1: {
      fontFamily: 'Lato',
      fontSize: '1.25rem',
      fontWeight: 400,
      color: `${localGrey}`,
    },
    subtitle2: {
      fontFamily: 'Lato',
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: localGrey,
    },
    body1: {
      fontSize: '1.25rem',
      color: localGrey,
      fontWeight: 300,
    },
    learnButton: {
      borderWidth: 2,
      borderRadius: 50,
      textTransform: 'none',
      fontFamily: 'Lato',
      fontWeight: 'bold',
      '&:hover': {
        boxShadow: '0px 5px 9px #9FC09F',
      },
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        fontSize: '1rem',
        color: localGreen,
      },
    },
    MuiInput: {
      root: {
        color: localGrey,
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${localGreen}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${localGreen}`,
        },
      },
    },
  },
});
export default theme;
