import { GET_MEALS, GET_MEALS_SUCCESS, GET_MEALS_ERROR } from '../actions';

const initialState = {
  meals: [],
  error: '',
  isLoading: false,
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_MEALS_SUCCESS:
      return {
        ...state,
        meals: action.payload,
        isLoading: false,
      };
    case GET_MEALS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default mealsReducer;
