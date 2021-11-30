import { GET_MEALS, GET_MEALS_SUCCESS, GET_MEALS_ERROR } from '../actions';

const initialState = {
  loading: false,
  meals: [],
  error: '',
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        loading: true,
      };
    case GET_MEALS_SUCCESS:
      return {
        ...state,
        meals: action.meal,
      };
    case GET_MEALS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default mealsReducer;
