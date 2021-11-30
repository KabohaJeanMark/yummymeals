import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategoryMeals, fetchMealDetails } from '../actions';

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

  return (
    <div className="container-fluid">
      <p className="mt-2">Please select a food category from the dropdown :)</p>
      <select className="form-select m-2" aria-label="Default select example" name="category" id="category" placeholder="Food category" onChange={(e) => setCategory(e.target.value)}>
        <option value="Breakfast">Breakfast</option>
        <option value="Dessert">Dessert</option>
        <option value="Vegan">Vegan</option>
        <option value="Chicken">Chicken</option>
        <option value="Side">Side</option>
        <option value="Pasta">Pasta</option>
      </select>
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
