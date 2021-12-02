import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mealsReducer from './meals';
import mealDetailsReducer from './details';

const rootReducer = combineReducers({
  meals: mealsReducer,
  details: mealDetailsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
