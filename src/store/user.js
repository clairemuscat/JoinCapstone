const SET_USER = 'SET_USER';

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
};
