import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SnackbarX from '../SnackbarX';
import TheButtonLogOut from './TheButtonLogOut';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));
/**
 * @summary Navigation bar to help the user to access the information.
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @example <TheNavbar openDrawerAction={openDrawerAction} />
 */
const TheNavbar = (props) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    reason !== 'clickaway' && setSnackbar({ ...snackbar, openX: false });
  };

  const [snackbar, setSnackbar] = React.useState({
    openX: false,
    messageX: '',
    typeX: '',
  });

  return (
    <React.Fragment>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              props.openDrawerAction();
            }}
            style={{ color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ color: 'white' }}
          ></Typography>
          <TheButtonLogOut />
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <SnackbarX data={snackbar} handleClose={handleClose} />
    </React.Fragment>
  );
};

export default TheNavbar;
