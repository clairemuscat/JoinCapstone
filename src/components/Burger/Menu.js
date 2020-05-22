import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

export const Menu = withRouter(({ open, handleSignOut, setOpen, history }) => {
  const linkTo = (path) => {
    history.push(path);
  };
  return (
    <StyledMenu open={open} onClick={() => setOpen(false)}>
      <div onClick={() => linkTo('/connect')}>Connect</div>
      <div onClick={() => linkTo('/account/calendar')}>Calendar</div>
      <div onClick={() => linkTo('/connections')}>Connections</div>
      <div className="menu-link" onClick={handleSignOut}>
        Sign Out
      </div>
    </StyledMenu>
  );
});

Menu.propTypes = {
  open: bool.isRequired,
};
