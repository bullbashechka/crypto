import { useMemo } from 'react';
import Card from '../../components/Card/card';
import CoinsList from '../../components/CoinsList/CoinsList';
import FilterBlock from '../../components/FilterBlock/FilterBlock';
import styles from './styles.module.css';

const Main = ({ balance, addBalance, coins, setCoins, filteredCoins }) => {
  const filterExpenciveCoins = () => {
    console.log('---func work');
    return filteredCoins.filter((coin) => coin.price > 1000);
  };
  // const expenciveCoins = filterExpenciveCoins();
  const expenciveCoins = useMemo(() => filterExpenciveCoins(), [filteredCoins]);

  return (
    <main className={styles.main}>
      <Card coins={coins} balance={balance} addBalance={addBalance} />
      <FilterBlock setCoins={setCoins} coins={coins} />
      {coins.length > 0 ? (
        <CoinsList coins={expenciveCoins} />
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default Main;
