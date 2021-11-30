import Select from 'react-select';

const CategoryFilter = () => {
  const options = [
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'Chicken', label: 'Chicken' },
    { value: 'Lamb', label: 'Lamb' },
    { value: 'Vegan', label: 'Vegan' },
    { value: 'Dessert', label: 'Dessert' },
  ];

  return (
    <Select placeholder="Food Categories" options={options} />
  );
};

export default CategoryFilter;
