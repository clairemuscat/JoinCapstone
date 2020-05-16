import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import { Provider } from 'react-redux';
import store from './store';
import { generateNewProfile } from './utils';

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

// const newUsers = [
//   {
//     uid: 'sjfdgnsfdkjgkfsd',
//     displayName: 'random Name',
//     email: 'sfgsfg@gsdfgs.com',
//   },
//   {
//     uid: 'gsdfgsfdgfsdg',
//     displayName: 'bob saget',
//     email: 'aaaa@aaaaa.com',
//   },
//   {
//     uid: 'cvklclkfgkdgklgpgp',
//     displayName: 'bilbo baggins',
//     email: 'bilbo@gmail.com',
//   },
//   {
//     uid: '334gsgfdgsk4334',
//     displayName: 'frodo potter',
//     email: 'frodo@gmail.com',
//   },
//   {
//     uid: 'f34rf93fmkjmsgdfgl',
//     displayName: 'airpods case',
//     email: 'airpods@gmail.com',
//   },
//   {
//     uid: 'sksfkmkmkmgmk54545',
//     displayName: 'book shelf',
//     email: 'shelves92@gmail.com',
//   },
//   {
//     uid: 'scvkksjksfisfiosf83',
//     displayName: 'melvin cat',
//     email: 'melvin@gmail.com',
//   },
//   {
//     uid: '3j34jh534h345ij5ij43i',
//     displayName: 'melanie cat',
//     email: 'melanie@gmail.com',
//   },
//   {
//     uid: 'n4nn3n54mn53mn53n',
//     displayName: 'coffee mug',
//     email: 'mugsrus@gmail.com',
//   },
//   {
//     uid: '8fs99sfg99sfgsfdg',
//     displayName: 'lamp light',
//     email: 'll@gmail.com',
//   },
// ];

// const makeRando = async (user) => {
//   await db.collection('users').doc(user.uid).set(generateNewProfile(user));
// };

// newUsers.forEach((user) => {
//   makeRando(user);
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);
