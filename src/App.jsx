import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import { getCoinsCurrency } from './api/api';

function App() {
  const [balance, setBalance] = useState(25000);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoinsCurrency();
      setCoins(data.coins);
      console.log(data);
    };
    fetchData();
  }, []);

  const addBalance = () => {
    setBalance((prevBalance) => prevBalance + 1500);
  };

  return (
    <>
      <Header />
      <Main
        setCoins={setCoins}
        coins={coins}
        balance={balance}
        addBalance={addBalance}
      />
    </>
  );
}

export default App;
