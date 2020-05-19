import React, { useEffect, useState } from 'react';
import {
  LandingPage,
  AccountPage,
  MatchingInterface,
  Navbar,
  PrivateRoute,
  Connections,
  Calendar,
} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setUser as setUserRedux } from './store/user';
import {
  fetchOrCreateProfile,
  setProfile as setProfileRedux,
} from './store/profile';
import { Menu } from './components/Burger';

function App(props) {
  const isLoggedIn = useSelector((state) =>
    state.user ? !!state.user.uid : false
  );
  const dispatch = useDispatch();
  const setUser = (user) => dispatch(setUserRedux(user));
  const getProfile = (user) => dispatch(fetchOrCreateProfile(user));
  const setProfile = (profile) => dispatch(setProfileRedux(profile));
  const [authStateChecked, setAuthStateChecked] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        getProfile(user);
      } else {
        setUser({});
        setProfile({});
      }
      setAuthStateChecked(true);
    });
  }, []);

  const handleSignOut = () => {
    try {
      firebase.auth().signOut();
      props.history.push('/');
    } catch (error) {}
  };

  return (
    <Router>
      <div className="app">
        <Navbar open={open} setOpen={setOpen} />
        <div id="content">
          <Menu open={open} setOpen={setOpen} handleSignOut={handleSignOut} />
          {authStateChecked && (
            <Switch>
              <PrivateRoute
                isLoggedIn={isLoggedIn}
                exact
                path="/account/calendar"
                component={Calendar}
              />
              <PrivateRoute
                isLoggedIn={isLoggedIn}
                path="/account"
                component={AccountPage}
              />
              <PrivateRoute
                isLoggedIn={isLoggedIn}
                exact
                path="/connect"
                component={MatchingInterface}
              />
              <PrivateRoute
                isLoggedIn={isLoggedIn}
                path="/connections"
                component={Connections}
              />
              <Route component={LandingPage} />
            </Switch>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
