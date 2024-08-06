/** @format */

import React from "react";
import Chart from "react-apexcharts";

function BarChart({ data, colors }) {
  const series = [
    {
      name: "Proficiency",
      data: data.map((lang) => lang.percentage),
    },
  ];

  const options = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: "end",
        horizontal: true,
        // barHeight: 20,
      },
    },
    colors,
    dataLabels: {
      enabled: true,
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: data.map((lang) => lang.name),
      labels: {
        show: false,
      },
      position: "end",
    },
    yaxis: {
      max: 100,
      reversed: false,
      labels: {
        style: {
          fontSize: 18,
          fontWeight: "bold",
        },
      },
    },
  };

  return <Chart options={options} series={series} type="bar" height={data.length * 50} />;
}

export default BarChart;
