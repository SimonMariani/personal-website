/** @format */

import { theme } from "antd";
import Chart from "react-apexcharts";
import type { DefaultChartProps } from "@/types";
import { getTitleConfig, getTooltipConfig, getToolbarConfig, getThemeConfig } from "@/utils/chart";

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
      toolbar: getToolbarConfig(),
      fontFamily: token.fontFamily,
    },
    title: getTitleConfig(title, token),
    tooltip: getTooltipConfig(token),
    theme: getThemeConfig(token),
    labels: data.map((dataPoint) => dataPoint.name),
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
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
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
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
