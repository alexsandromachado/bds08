import ReactApexChart from 'react-apexcharts';
import { formatPrice } from '../../utils/formatters';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
  totalSum: number;
};

function PieChartCard({ labels = [], name, series = [], totalSum }: Props) {
  return (
    <div className="chart-container base-card">
      <div className="info-chart-container">
        <h3>{formatPrice(totalSum)}</h3>
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
