import { createTheme  } from '@material-ui/core/styles';

const font = "'Rajdhani', sans-serif";
const fontAlternative = "'Bebas Neue', cursive";

const theme = createTheme ({
  typography: {
    fontFamily: font,
    h4: {
      fontFamily: fontAlternative,
    },
    button: { textTransform: 'none' },
  },

  palette: {
    type: 'dark',
    background: {
      paper: '#090a16',
      default: '#090a16',
    },
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#9fa8da',
    },
    error: {
      main: '#FF4E62',
    },
    warning: {
      main: '#ef6c00',
    },
    success: {
      main: '#3dce9d',
    },
    info: {
      main: '#4f67ef',
    },
  },
});

export default theme;
