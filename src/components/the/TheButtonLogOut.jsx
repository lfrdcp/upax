import React from 'react';
import { IconButton } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from 'react-router-dom';
/**
 * @summary Button to log out and send to log in
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @example <TheButtonLogOut />
 */
const TheButtonLogOut = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    history.replace('/login');
  };

  return (
    <Tooltip title="Cerrar sesion" aria-label="cerrar sesion">
      <IconButton aria-label="cerrar sesion" onClick={handleLogout}>
        <PowerSettingsNewIcon style={{ color: 'white' }} />
      </IconButton>
    </Tooltip>
  );
};

export default TheButtonLogOut;
