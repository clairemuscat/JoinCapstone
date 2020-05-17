import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';

export const Menu = ({ open, handleSignOut }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">My Profile</a>
      <a href="/">Calendar</a>
      <a href="/">Matches</a>
      <div onClick={handleSignOut}>Sign Out</div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};
