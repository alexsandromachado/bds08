import { useEffect, useMemo, useState } from 'react';
import Header from './components/header';
import Filter from './components/filter';
import './App.css';
import PieChartCard from './components/pie-chart-card';
import { FilterData, PieChartConfig, SalesByGender } from './types';
import { buildFilterParams, makeRequest } from './utils/request';
import { buildSalesByGenderChart } from './helpers';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByStore = buildSalesByGenderChart(response.data);
        setSalesByStore(newSalesByStore);
      })
      .catch(() => {
        console.log('Error to fetch sales by store');
      });
  }, [params]);

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="App">
        <Filter onFilterChange={onFilterChange} />
        <PieChartCard name="Lojas" labels={salesByStore?.labels} series={salesByStore?.series} />
      </div>
    </>
  );
}

export default App;
