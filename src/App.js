import React, { useEffect, useState } from "react";
import {
  LandingPage,
  AccountPage,
  MatchingInterface,
  Navbar,
  PrivateRoute,
  Connections,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser as setUserRedux } from "./store/user";
import {
  fetchOrCreateProfile,
  setProfile as setProfileRedux,
} from "./store/profile";

function App(props) {
  const isLoggedIn = useSelector((state) =>
    state.user ? !!state.user.uid : false
  );
  const dispatch = useDispatch();
  const setUser = (user) => dispatch(setUserRedux(user));
  const getProfile = (user) => dispatch(fetchOrCreateProfile(user));
  const setProfile = (profile) => dispatch(setProfileRedux(profile));
  const [authStateChecked, setAuthStateChecked] = useState(false);

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

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div id="content">
          {authStateChecked && (
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
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
