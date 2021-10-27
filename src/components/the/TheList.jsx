import React from 'react';
import { List, ListItemIcon, ListItem, ListItemText } from '@material-ui/core';
import { HomeOutlined } from '@material-ui/icons';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import { Link } from 'react-router-dom';
/**
 * @summary List used inside the drawer
 * @memberof module:Components
 *
 * @version 1.0
 * @author Alfredo Castañeda Porcayo <alfredocaspor1997@gmail.com>
 *
 * @example <TheList />
 */
const TheList = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  return (
    <React.Fragment>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          component={Link}
          to="/employees"
          selected={selectedIndex === 'employees'}
          onClick={() => setSelectedIndex('employees')}
        >
          <ListItemIcon>
            <HomeOutlined />
          </ListItemIcon>
          <ListItemText primary="Employees" />
        </ListItem>


        <ListItem
          button
          component={Link}
          to="/upload"
          selected={selectedIndex === 'upload'}
          onClick={() => setSelectedIndex('upload')}
        >
          <ListItemIcon>
            <BuildOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Upload" />
        </ListItem>
      </List>
    </React.Fragment>
  );
};
export default TheList;
