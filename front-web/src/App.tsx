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
        <PieChartCard />
      </div>
    </>
  );
}

export default App;
