import React from 'react';
import Header from './components/header';
import Filter from './components/filter';
import './App.css';
import PieChartCard from './components/pie-chart-card';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Filter />
        <PieChartCard
          name="Lojas"
          labels={['Uberlândia', 'Araguari', 'Uberaba']}
          series={[40, 30, 30]}
        />
      </div>
    </>
  );
}

export default App;
