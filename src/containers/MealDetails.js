import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMealDetails } from '../actions';

const MealDetailComponent = () => {
  const mealDetails = useSelector((state) => state.details.mealDetails);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchMealDetails(params.id));
  });

  return (
    <>
      {mealDetails !== undefined && mealDetails.meals
            && (
            <>
              <h2>{mealDetails.meals[0].strMeal}</h2>

              <img src={mealDetails.meals[0].strMealThumb} alt={mealDetails.meals[0].strMeal} />

              <p>{mealDetails.meals[0].strInstructions}</p>
            </>
            )}
    </>
  );
};

export default MealDetailComponent;
