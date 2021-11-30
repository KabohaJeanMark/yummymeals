import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategoryMeals } from '../actions';

const MealsContainer = () => {
  const meals = useSelector((state) => state.meals);
  const [category, setCategory] = useState('Breakfast');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryMeals(category));
  });

  return (
    <>
      <div>
        <Link to="/">yummyMeals</Link>
      </div>
      <select name="category" id="category" placeholder="Food category" onChange={(e) => setCategory(e.target.value)}>
        <option value="Breakfast">Breakfast</option>
        <option value="Dessert">Dessert</option>
        <option value="Vegan">Vegan</option>
        <option value="Chicken">Chicken</option>
        <option value="Side">Side</option>
        <option value="Pasta">Pasta</option>
      </select>
      <div>
        {meals && meals.map((meal) => (
          <div key={meal.idMeal}>

            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>

          </div>
        ))}
      </div>
    </>
  );
};

export default MealsContainer;
