import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import { Provider } from 'react-redux';
import store from './store';

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

// const makeRando = async (first, last) => {
//   const id = (Math.random() * 2 ** 50).toString();
//   const rando = {
//     random: Math.random() * 2 ** 50,
//     firstName: first,
//     lastName: last,
//   };
//   await db.collection('users').doc(id).set(rando);
// };

// makeRando('bla', 'bloo');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
