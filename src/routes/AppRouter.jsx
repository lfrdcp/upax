import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import LoginView from '../views/authentication/login/LoginView';

import DashboardRoutes from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/login" component={LoginView} />
        <PrivateRoute path="/" component={DashboardRoutes} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
