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
import { connect, useDispatch, useSelector } from 'react-redux';
import { setUser as setUserRedux } from './store/user';
import { db } from '.';
import {
  fetchOrCreateProfile,
  setProfile as setProfileRedux,
} from './store/profile';
import { generateNewProfile } from './utils';

function App(props) {
  const isLoggedIn = useSelector((state) =>
    state.user ? !!state.user.uid : false
  );
  const dispatch = useDispatch();
  const setUser = (user) => dispatch(setUserRedux(user));
  const getProfile = (user) => dispatch(fetchOrCreateProfile(user));
  const setProfile = (profile) => dispatch(setProfileRedux(profile));

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        getProfile(user);
      } else {
        setUser({});
        setProfile({});
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

export default App;
