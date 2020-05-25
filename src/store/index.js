import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import user from "./user";
import profile from "./profile";
import toConnect from "./toConnect";
import currentChat from "./chats";
import messages from "./messages";
import events from './events'
import meetings from './meetings'
import upcomingMeetings from './upcomingMeetings'

const reducer = combineReducers({
  user,
  profile,
  toConnect,
  calendar:events,
  meetings,
  currentChat,
  messages,
  upcomingMeetings
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
