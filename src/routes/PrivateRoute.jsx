import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { Hidden, makeStyles } from '@material-ui/core';
import TheNavbar from '../components/the/TheNavbar';
import TheDrawer from '../components/the/TheDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

const Squema = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const openDrawerAction = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <React.Fragment>
      <TheNavbar openDrawerAction={openDrawerAction} />
      <Hidden mdDown>
        <TheDrawer variant="permanent" open={true} />
      </Hidden>
      <Hidden lgUp>
        <TheDrawer
          variant="temporary"
          open={openDrawer}
          onClose={openDrawerAction}
        />
      </Hidden>
    </React.Fragment>
  );
};

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const classes = useStyles();
  return (
    <div>
      {localStorage.getItem('token') ? (
        <div className={classes.root}>
          <Squema />
          <div className={classes.content}>
            <div className={classes.toolbar}></div>
            <Route
              {...rest}
              component={(props) => (
                <Component {...props}/>
              )}
            />
          </div>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
