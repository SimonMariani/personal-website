/** @format */

export type ChartData = {
  name: string;
  percentage: number;
  description: string;
}[];

export type DefaultChartProps = {
  /* The data to show in the chart */
  data: ChartData;

  /* The opacity of the chart */
  opacity?: number;

  /* The title of the chart */
  title?: string;

  /* Padding around the chart */
  padding?: number;
};
