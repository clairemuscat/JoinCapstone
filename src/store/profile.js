import { db } from '..';
import { generateNewProfile } from '../utils';

const SET_PROFILE = 'SET_PROFILE';
const UPDATE_PROFILE = 'UPDATE_PROFILE'

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});

export const fetchOrCreateProfile = (user) => {
  return async (dispatch) => {
    const snap = await db.collection('users').doc(user.uid).get();
    if (snap.exists) {
      const profile = snap.data();
      dispatch(setProfile(profile));
    } else {
      await db.collection('users').doc(user.uid).set(generateNewProfile(user));
      const snap = await db.collection('users').doc(user.uid).get();
      const profile = snap.data();
      setProfile(profile);
    }
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return action.profile;
    case UPDATE_PROFILE:
      return action.profile
    default:
      return state;
  }
};
