import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

function PieChartCard({ labels = [], name, series = [] }: Props) {
  return (
    <div className="chart-container base-card">
      <div className="info-chart-container">
        <h3>R$ 746.484,00</h3>
        <span>Total de vendas</span>
      </div>
      <div className="pie-chart-container">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width="400"
          series={series}
        />
      </div>
    </div>
  );
}

export default PieChartCard;
