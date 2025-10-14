import './styles.css';

function CoinsList({ coins }) {
  return (
    <ul className="coins-list">
      {coins.map((coin) => (
        <li key={coin.uuid}>
          <div className="coin-info">
            <img src={coin.iconUrl} alt={coin.name} className="coin-logo" />
            <p className="coin-name">{coin.name}/USD</p>
          </div>
          <div className="coin-prices">
            <p className="price-usd">{(+coin.price).toFixed(2)} USD</p>
            <p className="price-btc">{(+coin.btcPrice).toFixed(2)} BTC</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CoinsList;
