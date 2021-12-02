import { GET_MEAL_DETAILS } from '../../actions';
import mealDetailsReducer from '../../reducers/details';

const initialState = {
  mealDetails: [],
};

describe('test mealsDetailsReducer', () => {
  it('defaults to initialState as return value', () => {
    expect(mealDetailsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle action and pass ID well', () => {
    const meal = {
      mealID: 5432,
    };

    const correctAction = {
      type: GET_MEAL_DETAILS,
      payload: meal.mealID,
    };

    expect(mealDetailsReducer(initialState, correctAction)).toEqual({
      ...initialState,
      mealDetails: correctAction.payload,
    });
  });

  it('should return undefined if a meal ID is not passed in the payload', () => {
    expect(mealDetailsReducer(initialState, {
      type: GET_MEAL_DETAILS,
      mealDetails: [],
    })).toEqual({
      ...initialState,
      mealDetails: undefined,
    });
  });
});
