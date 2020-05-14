import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import { Provider } from 'react-redux';
import store from './store';
import emptyProfile from '../emptyProfile';

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

// const getSampleProfile = async () => {
//   const profile = await db.collection('users').get('example');
//   console.log(profile, 'profile');
// };
// getSampleProfile();

// const createProfileOnUserCreation = admin.functions.auth
//   .user()
//   .onCreate(async (user) => {
//     try {
//       await db.collection('users').doc(user.uid).set(emptyProfile);
//     } catch (error) {
//       console.error(error);
//     }
//   });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
