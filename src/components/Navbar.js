import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';

const Navbar = withRouter(function ({ history, location }) {
  const linkTo = (path) => {
    history.push(path);
  };

  const handleSignOut = () => {
    try {
      firebase.auth().signOut();
      history.push('/');
    } catch (error) {}
  };
  console.log(location);
  return (
    <div id="navbar">
      <img src="/logo.png" />
      <div id="navbar-link-container">
        <div
          className={
            location.pathname === '/connect'
              ? 'navbar-link underline'
              : 'navbar-link'
          }
          onClick={() => linkTo('/connect')}
        >
          Connect
        </div>
        <div
          className={
            location.pathname === '/account/calendar'
              ? 'navbar-link underline'
              : 'navbar-link'
          }
          onClick={() => linkTo('/account/calendar')}
        >
          Calendar
        </div>
        <div
          className={
            location.pathname === '/connections'
              ? 'navbar-link underline'
              : 'navbar-link'
          }
          onClick={() => linkTo('/connections')}
        >
          Connections
        </div>
        <div className="navbar-link" onClick={handleSignOut}>
          Sign Out
        </div>
      </div>
    </div>
  );
});

export default Navbar;
