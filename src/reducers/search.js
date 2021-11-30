import { SEARCH_MEAL } from '../actions';

const initialState = {
  searchMeal: [],
};

const searchMealReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MEAL:
      return {
        ...state,
        searchMeal: action.searchResult,
      };
    default: return state;
  }
};

export default searchMealReducer;
