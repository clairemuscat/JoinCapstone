import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import profile from './profile';
import toConnect from './toConnect';

const reducer = combineReducers({
  user,
  profile,
  toConnect,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
  //setting up middleware which are combined with reducers to create the store
);
const store = createStore(reducer, middleware);

export default store;
