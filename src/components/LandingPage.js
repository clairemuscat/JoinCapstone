import React from 'react';
import { Auth } from '.';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function LandingPage(props) {
  const { isLoggedIn } = props;
  {
    return isLoggedIn ? (
      <Redirect to="/connect" />
    ) : (
      <div id="landing-page">
        <h1>This is the landing page for unauthenticated users</h1>
        <Auth />
      </div>
    );
  }
}

const mapState = (state) => ({
  user: state.user,
  isLoggedIn: state.user ? !!state.user.uid : false,
});

export default connect(mapState)(LandingPage);
