import React, { Fragment } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

const ProgressX = ({ show = false }) =>
  show ? <LinearProgress /> : <Fragment />;
export default ProgressX;
