/** @format */

import Chart from "react-apexcharts";
import { theme } from "antd";
import type { DefaultChartProps } from "@/types";
import { getTitleConfig } from "@/utils/chart";

const { useToken } = theme;

const RadialBarChart = ({ data, opacity, title, padding }: DefaultChartProps) => {
  // Get the theme token for styling
  const { token } = useToken();

  // Extract series values
  const series = data.map((dataPoint) => dataPoint.percentage);

  // The chart options
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "radialBar",
    },
    title: getTitleConfig(title, token),
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          background: "transparent",
          image: undefined,
        },
        barLabels: {
          enabled: true,
          offsetX: -8,
          fontSize: `${token.fontSize}px`,
          formatter: function (seriesName: string, opts: { seriesIndex: number; w: { globals: { series: number[] } } }) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
        },
      },
    },
    labels: data.map((dataPoint) => dataPoint.name),
  };

  // Return the component
  return (
    <div style={{ width: "100%", height: "100%", opacity: opacity || 1, padding: padding || 0, boxSizing: "border-box" }}>
      <Chart options={options} series={series} type="radialBar" height="100%" width="100%" />
    </div>
  );
};

export default RadialBarChart;
