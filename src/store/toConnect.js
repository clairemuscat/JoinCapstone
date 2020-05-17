const SET_TO_CONNECT = 'SET_TO_CONNECT';

export const setToConnect = (userArray) => ({
  type: SET_TO_CONNECT,
  toConnect: userArray,
});

export default (state = [], action) => {
  switch (action.type) {
    case SET_TO_CONNECT:
      return action.toConnect;
    default:
      return state;
  }
};
