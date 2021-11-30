import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mealsReducer from './meals';

const store = createStore(mealsReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
