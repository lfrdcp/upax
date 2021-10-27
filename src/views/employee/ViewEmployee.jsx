import React from 'react';
import { Grid } from '@material-ui/core';
import CardMainX from '../../components/card/CardMainX';
import TableEmployee from './TableEmployee';
import CreateEmployee from './CreateEmployee';

const ViewEmployee = () => {

  return (
    <Grid container spacing={2}>
      <CardMainX titleX="Employees" subtitleX="Employee Page" />
      <TableEmployee/>
      <CreateEmployee/>
    </Grid>
  )
  
};

export default ViewEmployee;