import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Burger, Menu } from '.';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';

const Navbar = withRouter(function (props) {
  const [open, setOpen] = useState(false);

  const handleSignOut = () => {
    try {
      firebase.auth().signOut();
      props.history.push('/');
    } catch (error) {}
  };

  return (
    <div id="navbar">
      <div id="burger-nav">
        <ThemeProvider theme={theme}>
          <Burger open={open} setOpen={setOpen} />
        </ThemeProvider>
      </div>
      <div id="logo" onClick={() => props.history.push('/')}>
        <img src="/logo.png" />
      </div>
      <Menu open={open} setOpen={setOpen} handleSignOut={handleSignOut} />
    </div>
  );
});

export default Navbar;
