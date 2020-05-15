const SET_PROFILE = 'SET_PROFILE';

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return action.profile;
    default:
      return state;
  }
};
