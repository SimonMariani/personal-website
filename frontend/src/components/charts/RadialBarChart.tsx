/** @format */

import Chart from "react-apexcharts";
import { theme } from "antd";
import type { DefaultChartProps } from "@/types";
import ClientOnly from "@/components/general/ClientOnly";
import { getTitleConfig, getTooltipConfig, getToolbarConfig, getThemeConfig } from "@/utils/chart";

const { useToken } = theme;

const RadialBarChart = ({ data, title }: DefaultChartProps) => {
  // Get the theme token for styling
  const { token } = useToken();

  // Extract series values
  const series = data.map((dataPoint) => dataPoint.percentage);

  // The chart options
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "radialBar",
      toolbar: getToolbarConfig(),
      fontFamily: token.fontFamily,
    },
    title: getTitleConfig(title, token),
    tooltip: getTooltipConfig(token),
    theme: getThemeConfig(token),
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 270,
        hollow: {
          size: "30%",
        },
        barLabels: {
          enabled: true,
          offsetX: -8,
          fontSize: `${token.fontSize}px`,
          formatter: function (seriesName: string, opts: { seriesIndex: number; w: { globals: { series: number[] } } }) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%";
          },
        },
      },
    },
    labels: data.map((dataPoint) => dataPoint.name),
  };

  // Return the component
  return (
    <ClientOnly>
      <Chart options={options} series={series} type="radialBar" height="100%" width="100%" style={{ flex: 1 }} />
    </ClientOnly>
  );
};

export default RadialBarChart;
