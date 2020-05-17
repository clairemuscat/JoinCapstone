import React from 'react';

function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn === true ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
// Thanks to Tyler McGinnis' stack overflow answer at https://stackoverflow.com/questions/43164554/how-to-implement-authenticated-routes-in-react-router-4
