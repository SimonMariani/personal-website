/** @format */

import Chart from "react-apexcharts";
import { theme } from "antd";
import type { DefaultChartProps } from "@/types";
import ClientOnly from "@/components/general/ClientOnly";
import { getTitleConfig, getTooltipConfig, getToolbarConfig, getThemeConfig } from "@/utils/chart";

const { useToken } = theme;

function TreeMapChart({ data, title }: DefaultChartProps) {
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
      toolbar: getToolbarConfig(),
      fontFamily: token.fontFamily,
    },
    theme: getThemeConfig(token, 0.1),
    title: getTitleConfig(title, token),
    tooltip: getTooltipConfig(token),
    plotOptions: {
      treemap: {
        distributed: true,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: `${token.fontSize}px`,
        fontWeight: "bold",
      },
    },
  };

  // Return the component, NOTE that we set box-sizing: border-box so that padding is included in div size
  return (
    <ClientOnly>
      <Chart options={options} series={series} type="treemap" height="100%" width="100%" style={{ flex: 1 }} />
    </ClientOnly>
  );
}

export default TreeMapChart;
