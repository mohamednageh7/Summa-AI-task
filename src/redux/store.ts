import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootreducers from './reducers';

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  rootreducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);



export default store; 