import axios from 'axios';

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

const fetchCategoryMeals = (category) => (dispatch) => {
  dispatch(getMeals);
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  axios.get(url).then((response) => {
    dispatch(getMealsSuccess(response.data.meals));
  })
    .catch((error) => dispatch(getMealsError(error.message)));
};

export {
  GET_MEALS, GET_MEALS_SUCCESS,
  GET_MEALS_ERROR, getMeals, getMealsSuccess, getMealsError, fetchCategoryMeals,
};
