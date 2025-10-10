import './styles.css';

function CoinsList({ coins }) {
  return (
    <ul className="coins-list">
      {coins.map((coin) => {
        return <li key={coin.uuid}>{coin.name}</li>;
      })}
    </ul>
  );
}

export default CoinsList;
