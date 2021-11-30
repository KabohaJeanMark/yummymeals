import { GET_MEALS, GET_MEALS_SUCCESS, GET_MEALS_ERROR } from '../../actions';
import mealsReducer from '../../reducers/meals';

const initialState = {
  meals: [],
  error: '',
  isLoading: false,
};

describe('test mealsReducer', () => {
  it('returns initialState as a default', () => {
    expect(mealsReducer(undefined, {})).toEqual(initialState);
  });

  it('starts to fetch from the API', () => {
    expect(mealsReducer(initialState, { type: GET_MEALS })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should handle successful API fetch request', () => {
    const response = {
      meals: [
        { strMeal: 'Mbuzi Choma (Roasted Goat)' },
      ],
    };

    const correctAction = {
      type: GET_MEALS_SUCCESS,
      payload: response.meals,
    };

    expect(mealsReducer(initialState, correctAction)).toEqual({
      ...initialState,
      meals: correctAction.payload,
    });
  });

  it('should handle API fetch request error', () => {
    const response = {
      error: "404 Error couldn't fetch",
    };

    const erroredAction = {
      type: GET_MEALS_ERROR,
      payload: response.error,
    };

    expect(mealsReducer(initialState, erroredAction)).toEqual({
      ...initialState,
      error: erroredAction.payload,
    });
  });
});
