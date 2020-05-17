import React, { useEffect } from 'react';
import {
  LandingPage,
  AccountPage,
  MatchingInterface,
  Navbar,
  PrivateRoute,
} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { setUser } from './store/user';
import { db } from '.';
import { fetchOrCreateProfile, setProfile } from './store/profile';
import { generateNewProfile } from './utils';

function App(props) {
  const { setUser, getProfile, setProfileRedux, isLoggedIn } = props;

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        getProfile(user);
      } else {
        setUser({});
        setProfileRedux({});
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <PrivateRoute
            isLoggedIn={isLoggedIn}
            path="/account"
            component={AccountPage}
          />
          <PrivateRoute
            isLoggedIn={isLoggedIn}
            path="/connect"
            component={MatchingInterface}
          />
          <Route component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

const mapState = (state) => ({
  user: state.user,
  isLoggedIn: state.user ? !!state.user.uid : false,
});

const mapDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  getProfile: (user) => dispatch(fetchOrCreateProfile(user)),
  setProfileRedux: (profile) => dispatch(setProfile(profile)),
});

export default connect(mapState, mapDispatch)(App);
