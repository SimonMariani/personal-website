/** @format */

import Chart from "react-apexcharts";
import { theme } from "antd";
import type { DefaultChartProps } from "@/types";
import { getTitleConfig } from "@/utils/chart";

const { useToken } = theme;

function ColumnChart({ data, opacity, title, padding }: DefaultChartProps) {
  // Antd theme token for styling
  const { token } = useToken();

  // The series data for the chart
  const series = [
    {
      name: "Proficiency",
      data: data.map((dataPoint) => dataPoint.percentage),
    },
  ];

  // The options for the chart
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
    },
    title: getTitleConfig(title, token),
    plotOptions: {
      bar: {
        borderRadius: token.borderRadius,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: true,
      style: { colors: [token.colorText] },
    },
    xaxis: {
      categories: data.map((dataPoint) => dataPoint.name),
      labels: {
        rotate: -45,
        style: {
          fontSize: `${token.fontSize}px`,
          fontWeight: "bold",
          colors: data.map(() => token.colorText),
        },
      },
    },
    yaxis: {
      max: 100,
      reversed: false,
      labels: {
        style: {
          fontSize: `${token.fontSize}px`,
          fontWeight: "bold",
          colors: [token.colorText],
        },
      },
    },
  };

  // Return the component
  return (
    <div style={{ width: "100%", height: "100%", opacity: opacity || 1, padding: padding || 0, boxSizing: "border-box" }}>
      <Chart options={options} series={series} type="bar" height="100%" width="100%" />
    </div>
  );
}

export default ColumnChart;
