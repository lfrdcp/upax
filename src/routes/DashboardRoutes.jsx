import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import ViewEmployee from '../views/employee/ViewEmployee';
import UploadImages from '../views/upload/UploadImages';

const Container = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/employees" component={ViewEmployee} />
        <Route path="/upload" component={UploadImages} />
        <Redirect to="/employees" />
      </Switch>
    </React.Fragment>
  );
};

export default Container;
