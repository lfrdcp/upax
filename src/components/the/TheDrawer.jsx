import React, { useEffect } from 'react';
import {
  makeStyles,
  Drawer,
  Divider,
  Avatar,
  ListItemText,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import TheList from './TheList';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAction } from '../../redux/actions/userAction';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText('#C3C9E8'),
    backgroundColor: '#C3C9E8',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
/**
 * @summary Component found on the left side of the page
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @example
 * <TheDrawer
 *  variant="permanent"
 *  open={true}
 * />
 *
 * <TheDrawer
 *  variant="temporary"
 *  open={openDrawer}
 *  onClose={openDrawerAction}
 * />
 */
const TheDrawer = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.userReducer);

  useEffect(() => {
    let user = { email: localStorage.getItem('email') };
    dispatch(setUserAction(user));
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Drawer
      className={classes.drawer}
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar}>
        <div className={classes.root}>
          {userReducer.user.length !== 0 && (
            <ListItem>
              <ListItemIcon>
                <Avatar className={classes.avatar}>
                  {userReducer.user.email.charAt(0)}
                </Avatar>
              </ListItemIcon>
              <ListItemText primary={userReducer.user.email} />
            </ListItem>
          )}
        </div>
      </div>
      <Divider />
      <TheList />
    </Drawer>
  );
};

export default TheDrawer;
