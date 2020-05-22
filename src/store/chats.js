import axios from 'axios';

export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT';

export const setCurrentChat = (currentChat) => ({
  type: SET_CURRENT_CHAT,
  currentChat,
});

export default (state = 'default', action) => {
  switch (action.type) {
    case SET_CURRENT_CHAT:
      return action.currentChat;
    default:
      return state;
  }
};
