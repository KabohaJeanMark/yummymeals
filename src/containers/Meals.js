import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategoryMeals, fetchMealDetails } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const MealsContainer = () => {
  const meals = useSelector((state) => state.meals.meals);
  const [category, setCategory] = useState('Breakfast');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryMeals(category));
  });

  const getMealDetails = (id) => {
    dispatch(fetchMealDetails(id));
  };

  const changeFilter = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="container-fluid">
      <p className="mt-2">Please select a food category from the dropdown :)</p>
      <CategoryFilter handleFilterChange={changeFilter} />
      <div className="mealsContainer">
        {meals && meals.map((meal) => (
          <div key={meal.idMeal} className="card" role="button" tabIndex={0} onClick={() => getMealDetails(meal.idMeal)} onKeyDown={() => getMealDetails(meal.idMeal)}>
            <img className="card-img-top" src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="card-body">
              <h3 className="card-title">{meal.strMeal}</h3>
              <Link to={`meals/${meal.idMeal}`}>Recipe Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsContainer;
