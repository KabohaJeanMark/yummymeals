// import { GET_MEALS, GET_MEALS_SUCCESS } from '../../actions';
import mealsReducer from '../../reducers/meals';

const initialState = {
  meals: [],
  error: '',
};

describe('test mealsReducer', () => {
  it('returns initialState as a default', () => {
    expect(mealsReducer(undefined, {})).toEqual(initialState);
  });
});
