import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';

export const Menu = ({ open, handleSignOut }) => {
  return (
    <StyledMenu open={open}>
      <div>
        <Link className="link" to="/connect">
          Connect
        </Link>
      </div>
      <div>
        <Link className="link" to="/account/calendar">
          Calendar
        </Link>
      </div>
      <div>
        <Link className="link" to="/connections">
          My Connections
        </Link>
      </div>
      <div onClick={handleSignOut}>Sign Out</div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};
