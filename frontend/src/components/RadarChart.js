/** @format */

import React from "react";
import Chart from "react-apexcharts";

function RadarChart({ data }) {
  const series = [
    {
      name: "Proficiency",
      data: data.map((lang) => lang.percentage),
    },
  ];
  const options = {
    chart: {
      type: "radar",
      toolbar: {
        show: true,
      },
    },
    yaxis: {
      max: 100,
      stepSize: 10,
    },
    xaxis: {
      labels: {
        style: {
          fontSize: 18,
          fontWeight: "bold",
        },
      },
      categories: data.map((lang) => lang.name),
    },
  };

  return <Chart options={options} series={series} type="radar" height={1000} />;
}

export default RadarChart;
