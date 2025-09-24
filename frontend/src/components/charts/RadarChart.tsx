/** @format */

import Chart from "react-apexcharts";
import { theme } from "antd";
import type { DefaultChartProps } from "@/types";
import { getTitleConfig } from "@/utils/chart";

const { useToken } = theme;

function RadarChart({ data, opacity, title, padding }: DefaultChartProps) {
  // Get the theme token for styling
  const { token } = useToken();

  // Transform the data into the format required by the charting library
  const series = [
    {
      name: "Proficiency",
      data: data.map((dataPoint) => dataPoint.percentage),
    },
  ];

  // The options for the chart
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "radar",
    },
    title: getTitleConfig(title, token),
    xaxis: {
      labels: {
        style: {
          fontFamily: token.fontFamily,
          fontSize: `${token.fontSize}px`,
          fontWeight: "bold",
        },
      },
      categories: data.map((dataPoint) => dataPoint.name),
    },
  };

  // Return the component
  return (
    <div style={{ width: "100%", height: "100%", opacity: opacity || 1, padding: padding || 0, boxSizing: "border-box" }}>
      <Chart options={options} series={series} type="radar" height="100%" width="100%" />
    </div>
  );
}

export default RadarChart;
