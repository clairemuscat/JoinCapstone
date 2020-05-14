import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import { Provider } from 'react-redux';
// React-redux has a provider element
// with which we pass down our store to react
import store from './store';
// import * as serviceWorker from './serviceWorker';

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

// const getSampleProfile = async () => {
//   const profile = await db.collection('users').get('example');
//   console.log(profile, 'profile');
// };
// getSampleProfile();

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
