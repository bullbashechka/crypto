import { withRuBalance } from '../../helpers/hoc/withRuBalance';
import './styles.css';

function Card({ balance, addBalance, ruBalance }) {
  console.log({ ruBalance });

  return (
    <div className="card">
      <p className="card__title">Crypto Finance</p>

      <div className="card__content">
        <div className="card__owner">Kirill Saidashev</div>
        <div className="card__balance">{balance} $</div>
      </div>

      <button className="card__btn" onClick={addBalance}>
        Add Money
      </button>
    </div>
  );
}

export default withRuBalance(Card);
