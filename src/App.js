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
import { setProfile } from './store/profile';
import { generateNewProfile } from './utils';
import UserMandatoryForm from './components/UserForms/UserMandatoryForm';

function App(props) {
  const { setUser, setProfile, isLoggedIn } = props;

  // Listen for auth state change, set user and profile in state
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
      //check firestore for a profile matching the user
      const snap = await db.collection('users').doc(user.uid).get();
      // if the user has a profile in the database, set that to redux
      if (snap.exists) {
        const profile = snap.data();
        setProfile(profile);
        //if not, create a new profile object and post it to firestore
      } else {
        await db
          .collection('users')
          .doc(user.uid)
          .set(generateNewProfile(user));
        const snap = await db.collection('users').doc(user.uid).get();
        const profile = snap.data();
        // set profile in redux
        setProfile(profile);
      }
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
            <Route path="/newUser" component={UserMandatoryForm} />
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
  setProfile: (profile) => dispatch(setProfile(profile)),
});

export default connect(mapState, mapDispatch)(App);
