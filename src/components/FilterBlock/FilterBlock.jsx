import React, { useEffect, useState } from 'react';
import './styles.css';

const FilterBlock = ({ coins, setCoins }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const filteredCoins = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(value.toLowerCase());
    });
    setCoins(filteredCoins);
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
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

export default React.memo(FilterBlock);
