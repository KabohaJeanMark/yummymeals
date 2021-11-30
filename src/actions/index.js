import axios from 'axios';

const GET_MEALS = 'GET_MEALS';
const GET_MEALS_SUCCESS = 'GET_MEALS_SUCCESS';
const GET_MEALS_ERROR = 'GET_MEALS_ERROR';
const GET_MEAL_DETAILS = 'GET_MEAL_DETAILS';

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

const getMealDetails = (id) => ({
  type: GET_MEAL_DETAILS,
  id,
});

const fetchCategoryMeals = (category) => (dispatch) => {
  dispatch(getMeals);
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  axios.get(url).then((response) => {
    dispatch(getMealsSuccess(response.data.meals));
  })
    .catch((error) => dispatch(getMealsError(error.message)));
};

const fetchMealDetails = (id) => (dispatch) => {
  dispatch(getMeals);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  axios.get(url).then((response) => {
    dispatch(getMealDetails(response.data));
  })
    .catch((error) => dispatch(getMealsError(error.message)));
};

export {
  GET_MEALS, GET_MEALS_SUCCESS, GET_MEALS_ERROR,
  getMeals, getMealsSuccess, getMealsError, getMealDetails,
  fetchCategoryMeals, fetchMealDetails,
};
