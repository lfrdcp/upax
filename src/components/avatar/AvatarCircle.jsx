import React from 'react';
import { Avatar, Box, makeStyles } from '@material-ui/core';
import './circle.css';

const AvatarCircle = () => {
  const classes = useStyles();
  return (
    <div className="contain">
      <div className="topRight">
        <Avatar
          className={classes.large}
          style={{
            background: 'linear-gradient(45deg, #2196F3 16%, #21CBF3 31%)',
          }}
          children={<Box />}
        />
      </div>
    </div>
  );
};

export default AvatarCircle;

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
}));
