import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mealsReducer from './meals';
import searchMealReducer from './search';

const rootReducer = combineReducers({
  meals: mealsReducer,
  search: searchMealReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
