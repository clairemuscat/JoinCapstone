import React from "react";
import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">My Profile</a>
      <a href="/">Calendar</a>
      <a href="/">Matches</a>
      <a href="/">Log Out</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};
