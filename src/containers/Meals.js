import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoryMeals } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const MealsContainer = () => {
  const meals = useSelector((state) => state.meals.meals);
  console.log(meals);
  const [category, setCategory] = useState('Breakfast');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryMeals(category));
  }, [category]);

  return (
    <>
      <p>Choose a category</p>
      <CategoryFilter onChange={(e) => setCategory(e.target.value)} />
    </>
  );
};

export default MealsContainer;
