import Card from '../../components/Card/card';
import CoinsList from '../../components/CoinsList/CoinsList';
import FilterBlock from '../../components/FilterBlock/FilterBlock';
import styles from './styles.module.css';

const Main = ({ balance, addBalance, coins }) => {
  return (
    <main className={styles.main}>
      <Card coins={coins} balance={balance} addBalance={addBalance} />
      <FilterBlock />
      {coins.length > 0 ? <CoinsList coins={coins} /> : <div>Loading...</div>}
    </main>
  );
};

export default Main;
