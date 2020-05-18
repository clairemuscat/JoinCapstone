import React from "react";
import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";
import { Link } from "react-router-dom";

export const Menu = ({ open, handleSignOut }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/connect">Connect</Link>
      <Link to="/account/calendar">Calendar</Link>
      <Link to="/connections">My Connections</Link>
      <div onClick={handleSignOut}>Sign Out</div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};
