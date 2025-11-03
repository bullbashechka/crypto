import Card from '../../components/Card/Card.jsx';
import CoinsList from '../../components/CoinsList/CoinsList';
import FilterBlock from '../../components/FilterBlock/FilterBlock';
import styles from './styles.module.css';

const Main = ({ balance, addBalance, coins, setCoins }) => {
  return (
    <main className={styles.main}>
      <Card coins={coins} balance={balance} addBalance={addBalance} />
      <FilterBlock setCoins={setCoins} />
      {coins.length > 0 ? <CoinsList /> : <div>Loading...</div>}
    </main>
  );
};

export default Main;
