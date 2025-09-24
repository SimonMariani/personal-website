/** @format */

import Chart from "react-apexcharts";
import { theme } from "antd";
import type { DefaultChartProps } from "@/types";
import { getTitleConfig } from "@/utils/chart";

const { useToken } = theme;

function TreeMapChart({ data, opacity, title, padding }: DefaultChartProps) {
  // Get the theme token for styling
  const { token } = useToken();

  // Transform the data into the format required by the charting library
  const series = [
    {
      data: data.map((dataPoint) => ({
        x: dataPoint.name,
        y: dataPoint.percentage,
      })),
    },
  ];

  // The options for the chart
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "treemap",
    },
    title: getTitleConfig(title, token),
    plotOptions: {
      treemap: {
        distributed: true,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: token.fontFamily,
        fontSize: `${token.fontSize}px`,
        fontWeight: "bold",
      },
    },
  };

  // Return the component, NOTE that we set box-sizing: border-box so that padding is included in div size
  return (
    <div style={{ width: "100%", height: "100%", opacity: opacity || 1, padding: padding || 0, boxSizing: "border-box" }}>
      <Chart options={options} series={series} type="treemap" height="100%" width="100%" />
    </div>
  );

  // return <Chart options={options} series={series} type="treemap" height={500} />;
}

export default TreeMapChart;
