import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoryMeals } from '../actions';

const MealsContainer = () => {
  const meals = useSelector((state) => state.meals.meals);
  console.log(meals);
  const [category, setCategory] = useState({
    category: 'Breakfast',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryMeals(category));
  }, [category]);

  return (
    <>
      <p>Choose a category</p>
      <select name="category" id="category" placeholder="Food category" onChange={(e) => setCategory(e.target.value)}>
        <option value="Breakfast">Breakfast</option>
        <option value="Dessert">Dessert</option>
        <option value="Vegan">Vegan</option>
        <option value="Chicken">Chicken</option>
      </select>
    </>
  );
};

export default MealsContainer;
