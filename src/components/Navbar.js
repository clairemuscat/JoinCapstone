import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { Burger, Menu } from '.';

function Navbar(props) {
  const [open, setOpen] = useState(false);
  return (
    <div id="navbar">
      <ThemeProvider theme={theme}>
        <Burger open={open} setOpen={setOpen} />
      </ThemeProvider>
      <img src="/logo.png" />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
}

export default Navbar;
