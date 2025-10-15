import { useState } from 'react';
import './styles.css';

const FilterBlock = ({ setFilter }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setFilter(newValue);
  };
  return (
    <div className="filter-block">
      <input
        onChange={handleChange}
        value={value}
        className="input"
        type="text"
        placeholder="bitcoin"
      />
    </div>
  );
};

export default FilterBlock;
