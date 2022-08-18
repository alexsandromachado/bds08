export type Store = {
  id: number;
  name: string;
};

export type FilterData = {
  store?: Store;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};

export type SalesByGender = {
  gender: string;
  sum: number;
};
