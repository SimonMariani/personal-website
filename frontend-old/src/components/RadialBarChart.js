/** @format */

import React from "react";
import Chart from "react-apexcharts";

function RadialBarChart({ data }) {
  const options = {
    chart: {
      type: "radialBar",
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          enabled: false,
          name: {
            fontSize: 18,
          },
          value: {
            fontSize: 18,
          },
        },
      },
    },
    labels: data.map((lang) => lang.name),
  };

  const series = data.map((lang) => lang.percentage);

  return <Chart options={options} series={series} type="radialBar" height={700} />;
}

export default RadialBarChart;
