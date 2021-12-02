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
    <div className="container">
      {mealDetails !== undefined && mealDetails.meals
            && (
            <>
              <h2>{mealDetails.meals[0].strMeal}</h2>
              <div className="mealDetails">
                <div className="imgDiv">
                  <img className="mealImg" src={mealDetails.meals[0].strMealThumb} alt={mealDetails.meals[0].strMeal} />
                </div>
                <div>
                  <h2 className="mt-2">RECIPE</h2>
                  <a href={mealDetails.meals[0].strYoutube} target="_blank" rel="noreferrer">YouTube Demo Video Walkthrough</a>
                  <p>{mealDetails.meals[0].strInstructions}</p>
                </div>
              </div>
            </>
            )}
    </div>
  );
};

export default MealDetailComponent;
