/** @format */

import Chart from "react-apexcharts";
import { theme } from "antd";
import type { DefaultChartProps } from "@/types";
import { getTitleConfig, getTooltipConfig, getToolbarConfig, percentageFormatter, getThemeConfig } from "@/utils/chart";

const { useToken } = theme;

function BarChart({ data, opacity, title, padding }: DefaultChartProps) {
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
      toolbar: getToolbarConfig(),
    },
    title: getTitleConfig(title, token),
    tooltip: getTooltipConfig(token),
    theme: getThemeConfig(token),
    plotOptions: {
      bar: {
        borderRadius: token.borderRadius,
        borderRadiusApplication: "end",
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
      style: { colors: [token.colorText] },
      formatter: percentageFormatter,
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      title: {
        text: "Percentage (%)",
        style: {
          fontSize: `${token.fontSizeHeading5}px`,
          fontWeight: "bold",
          color: token.colorText,
        },
      },
      max: 100,
      categories: data.map((dataPoint) => dataPoint.name),
      labels: {
        show: true,
        style: {
          fontSize: `${token.fontSize}px`,
          fontWeight: "bold",
          colors: [token.colorText],
        },
      },
    },
    yaxis: {
      title: {
        text: "Softwares",
        style: {
          fontSize: `${token.fontSizeHeading5}px`,
          fontWeight: "bold",
          color: token.colorText,
        },
      },
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

export default BarChart;
