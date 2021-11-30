import { GET_MEALS, GET_MEALS_SUCCESS } from '../../actions';
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
});
