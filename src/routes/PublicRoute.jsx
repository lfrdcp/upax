import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <div>
      {!localStorage.getItem("token") ? (
        <Route {...rest} component={(props) => <Component {...props} />} />
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
