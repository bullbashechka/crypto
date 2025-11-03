import './styles.css';
import React, { memo, useContext } from 'react';
import { CoinsContext } from '../../context/coinsContext';
import { useFilterCoins } from '../../helpers/hooks/useFilterCoins';

const FilterBlock = ({ setCoins }) => {
  const coinsContext = useContext(CoinsContext);
  const { coins } = coinsContext;

  const { setValue, value } = useFilterCoins(setCoins, coins);

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

export default memo(FilterBlock);
