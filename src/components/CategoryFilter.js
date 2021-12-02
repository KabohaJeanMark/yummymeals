import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => (
  <select className="form-select m-2" aria-label="Default select example" name="category" id="category" placeholder="Food category" onChange={(e) => handleFilterChange(e)}>
    <option value="Breakfast">Breakfast</option>
    <option value="Dessert">Dessert</option>
    <option value="Vegan">Vegan</option>
    <option value="Chicken">Chicken</option>
    <option value="Side">Side</option>
    <option value="Pasta">Pasta</option>
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
