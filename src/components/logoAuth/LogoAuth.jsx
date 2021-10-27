import React from 'react';
import { CardMedia } from '@material-ui/core';
import logo from '../../assets/img/logo.png';

const LogoAuth = () => {
  return (
    <CardMedia
      style={{
        height: '5rem',
        backgroundSize: 'contain',
      }}
      image={logo}
      title="logo"
    />
  );
};

export default LogoAuth;
