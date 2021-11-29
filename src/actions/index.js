const GET_MEALS = 'GET_MEALS';
const GET_MEALS_SUCCESS = 'GET_MEALS_SUCCESS';
const GET_MEALS_ERROR = 'GET_MEALS_ERROR';

const getMeals = () => ({
  type: GET_MEALS,
});

const getMealsSuccess = (meal) => ({
  type: GET_MEALS_SUCCESS,
  meal,
});

const getMealsError = (error) => ({
  type: GET_MEALS_ERROR,
  error,
});

export {
  GET_MEALS, GET_MEALS_SUCCESS,
  GET_MEALS_ERROR, getMeals, getMealsSuccess, getMealsError,
};
