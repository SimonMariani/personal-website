/** @format */

import { theme } from "antd";
import Chart from "react-apexcharts";
import type { DefaultChartProps } from "@/types";
import { getTitleConfig } from "@/utils/chart";

const { useToken } = theme;

function PolarChart({ data, opacity, title, padding }: DefaultChartProps) {
  // Get the theme token for styling
  const { token } = useToken();

  // Transform the data into the format required by the charting library
  const series = data.map((dataPoint) => dataPoint.percentage);

  // The options for the chart
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "radialBar",
    },
    title: getTitleConfig(title, token),
    labels: data.map((dataPoint) => dataPoint.name),
    legend: {
      show: true,
      position: "top",
      fontSize: `${token.fontSize}px`,
      markers: {
        offsetX: -5,
      },
      itemMargin: {
        horizontal: 12,
        vertical: 8,
      },
      labels: {
        colors: token.colorText,
      },
    },
    dataLabels: {
      enabled: true,
    },
  };

  // Return the component
  return (
    <div style={{ width: "100%", height: "100%", opacity: opacity || 1, padding: padding || 0, boxSizing: "border-box" }}>
      <Chart options={options} series={series} type="polarArea" height="100%" width="100%" />
    </div>
  );
}

export default PolarChart;
