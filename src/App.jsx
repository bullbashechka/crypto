import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import { getCoinsCurrency } from './api/api';

function App() {
  const [balance, setBalance] = useState(25000);
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoinsCurrency();
      setCoins(data.coins);
      setFilteredCoins(data.coins);
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
        setCoins={setFilteredCoins}
        coins={coins}
        balance={balance}
        addBalance={addBalance}
        filteredCoins={filteredCoins}
      />
    </>
  );
}

export default App;
