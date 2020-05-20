import axios from "axios";

export const SET_CURRENT_CHAT = "SET_CURRENT_CHAT";

export const setCurrentChat = (currentChat) => ({
  type: SET_CURRENT_CHAT,
  currentChat,
});

export default (state = "", action) => {
  switch (action.type) {
    case SET_CURRENT_CHAT:
      console.log(action.currentChat, "action dispatched");
      return action.currentChat;
    default:
      return state;
  }
};
