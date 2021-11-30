import { GET_MEAL_DETAILS } from '../actions';

const initialState = {

  mealDetails: [],
};

const mealDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEAL_DETAILS:
      return {
        ...state,
        mealDetails: action.id,
      };
    default:
      return state;
  }
};
export default mealDetailsReducer;
