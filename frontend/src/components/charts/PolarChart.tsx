/** @format */

import { theme } from "antd";
import Chart from "react-apexcharts";
import type { DefaultChartProps } from "@/types";
import ClientOnly from "@/components/general/ClientOnly";
import { getTitleConfig, getTooltipConfig, getToolbarConfig, getThemeConfig } from "@/utils/chart";

const { useToken } = theme;

function PolarChart({ data, title }: DefaultChartProps) {
  // Get the theme token for styling
  const { token } = useToken();

  // Transform the data into the format required by the charting library
  const series = data.map((dataPoint) => dataPoint.percentage);

  // The options for the chart
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "polarArea",
      toolbar: getToolbarConfig(),
      fontFamily: token.fontFamily,
    },
    title: getTitleConfig(title, token),
    tooltip: getTooltipConfig(token),
    theme: getThemeConfig(token),
    labels: data.map((dataPoint) => dataPoint.name),
    stroke: {
      width: 0,
    },
    legend: {
      show: true,
      position: "bottom",
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
      formatter: (_val, opts) => {
        const name = opts.w.globals.labels[opts.seriesIndex];
        const rawValue = opts.w.config.series[opts.seriesIndex];
        return `${name}: ${rawValue}%`;
      },
    },
  };

  // Return the component
  return (
    <ClientOnly>
      <Chart options={options} series={series} type="polarArea" height="100%" width="100%" />
    </ClientOnly>
  );
}

export default PolarChart;
