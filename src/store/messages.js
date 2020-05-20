export const SET_MESSAGES = "SET_MESSAGES";

export const setMessage = (messages) => ({
  type: SET_MESSAGES,
  messages,
});

export default (state = [], action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};
