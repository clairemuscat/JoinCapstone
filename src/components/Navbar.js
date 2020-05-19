import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Burger, Menu } from '.';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';

const Navbar = withRouter(function (props) {
  const { open, setOpen } = props;
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
    </div>
  );
});

export default Navbar;
