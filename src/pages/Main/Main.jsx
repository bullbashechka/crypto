import { useState } from 'react';
import Card from '../../components/Card/card';
import CoinsList from '../../components/CoinsList/CoinsList';
import FilterBlock from '../../components/FilterBlock/FilterBlock';
import styles from './styles.module.css';

const Main = ({ balance, addBalance, coins }) => {
  const [filter, setFilter] = useState('');

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main className={styles.main}>
      <Card coins={coins} balance={balance} addBalance={addBalance} />
      <FilterBlock setFilter={setFilter} />
      {coins.length > 0 ? (
        <CoinsList coins={filteredCoins} />
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default Main;
