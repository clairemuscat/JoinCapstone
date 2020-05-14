import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import {
  Burger,
  Menu,
  LandingPage,
  AccountPage,
  MatchingInterface,
} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { setUser } from './store/user';

function App(props) {
  const { setUser, isLoggedIn } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => setUser(user));
  });

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </ThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
        {isLoggedIn && (
          <Switch>
            <Route path="/account" component={AccountPage} />
            <Route path="/connect" component={MatchingInterface} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

const mapState = (state) => ({
  user: state.user,
  isLoggedIn: !!state.user.uid,
});

const mapDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapState, mapDispatch)(App);
