export const SET_MESSAGES = "SET_MESSAGES";

export const setMessage = (messages) => ({
  type: SET_MESSAGES,
  messages,
});

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};
