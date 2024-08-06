/** @format */

import React from "react";
import Chart from "react-apexcharts";

function TreeMapChart({ data }) {
  const series = [
    {
      data: data.map((lang) => ({
        x: lang.name,
        y: lang.percentage,
      })),
    },
  ];

  const options = {
    chart: {
      type: "treemap",
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      treemap: {
        distributed: true,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: 18,
        fontWeight: "bold",
      },
    },
    colors: ["#00E396", "#FEB019", "#FF4560", "#775DD0", "#3F51B5", "#03A9F4", "#4CAF50", "#F9CE1D", "#FF9800", "#33B2DF"],
  };

  return <Chart options={options} series={series} type="treemap" height={500} />;
}

export default TreeMapChart;
