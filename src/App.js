import React, { useEffect, useState } from "react";
import {
  LandingPage,
  AccountPage,
  MatchingInterface,
  Navbar,
  PrivateRoute,
  Connections,
  Calendar,
  Chat,
  SingleChat,
  UserMandatoryForm,
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
                exact
                path="/form"
                component={UserMandatoryForm}
              />
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
              <PrivateRoute
                isLoggedIn={isLoggedIn}
                exact
                path="/chat"
                component={Chat}
              />
              <PrivateRoute
                isLoggedIn={isLoggedIn}
                path="/chat/:compoundSlice"
                component={SingleChat}
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
