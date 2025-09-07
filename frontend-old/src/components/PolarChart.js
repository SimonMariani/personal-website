/** @format */

import React from "react";
import Chart from "react-apexcharts";

function PolarChart({ data }) {
  const series = data.map((lang) => lang.percentage);

  const options = {
    chart: {
      type: "radialBar",
      toolbar: {
        show: true,
      },
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    labels: data.map((lang) => lang.name),
    yaxis: {
      max: 100,
      stepSize: 10,
    },
  };

  return <Chart options={options} series={series} type="polarArea" height={700} />;
}

export default PolarChart;
