/** @format */

import React from "react";
import Chart from "react-apexcharts";

function TreeMapChart({ data }) {
  const treeMapOptions = {
    chart: {
      type: "treemap",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      treemap: {
        enableShades: true,
        distributed: true,
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            colors: ["#fff"],
          },
          formatter: function (val, opt) {
            return `${opt.w.globals.labels[opt.dataPointIndex]}: ${val}%`;
          },
        },
      },
    },
    colors: ["#00E396", "#FEB019", "#FF4560", "#775DD0", "#3F51B5", "#03A9F4", "#4CAF50", "#F9CE1D", "#FF9800", "#33B2DF"],
    tooltip: {
      theme: "dark",
      y: {
        formatter: function (val) {
          return `${val}%`;
        },
      },
    },
  };

  const treeMapSeries = [
    {
      data: data.map((lang) => ({
        x: lang.name,
        y: lang.percentage,
      })),
    },
  ];

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <Chart options={treeMapOptions} series={treeMapSeries} type="treemap" width={"100%"} />
    </div>
  );
}

export default TreeMapChart;
