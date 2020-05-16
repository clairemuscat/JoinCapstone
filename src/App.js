import React, { useEffect } from 'react';
import {
  LandingPage,
  AccountPage,
  MatchingInterface,
  Navbar,
} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { setUser } from './store/user';
import { db } from '.';
import { fetchOrCreateProfile } from './store/profile';
import { generateNewProfile } from './utils';

function App(props) {
  const { setUser, getProfile, isLoggedIn } = props;

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
      getProfile(user);
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
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
  isLoggedIn: state.user ? !!state.user.uid : false,
});

const mapDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  getProfile: (user) => dispatch(fetchOrCreateProfile(user)),
});

export default connect(mapState, mapDispatch)(App);
