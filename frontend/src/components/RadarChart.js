/** @format */

import React from "react";
import { Row, Col, Space, Card, List } from "antd";
import Chart from "react-apexcharts";

function RadarChart({ data }) {
  const radarChartOptions = {
    chart: {
      // type: "radar",
      toolbar: {
        show: false,
      },
      // offsetX: 0, // Adjust horizontal padding
      // offsetY: 0, // Adjust vertical padding
      // height: "100%", // Ensure the chart takes the full height of its container
    },
    title: {
      // text: "Programming Languages Proficiency",
      align: "left",
      style: {
        fontSize: "18px",
        color: "#333",
      },
    },
    plotOptions: {
      radar: {
        // size: 140,
        polygons: {
          strokeColors: "#e8e8e8",
          strokeWidth: 1,
          connectorColors: "#e8e8e8",
          fill: {
            colors: ["#ffffff"],
          },
        },
      },
    },
    xaxis: {
      categories: data.map((lang) => lang.name),
      labels: {
        style: {
          colors: "#333",
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
    },
    yaxis: {
      max: 100,
      labels: {
        style: {
          colors: "#333",
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
    },
    fill: {
      opacity: 0.5,
    },
    tooltip: {
      theme: "dark",
    },
    grid: {
      borderColor: "#f1f1f1",
      // padding: {
      //   top: 0,
      //   right: 0,
      //   bottom: 0,
      //   left: 0,
      // },
    },
  };

  const radarChartSeries = [
    {
      name: "Proficiency",
      data: data.map((lang) => lang.percentage),
    },
  ];

  return (
    // <div>
    <Chart options={radarChartOptions} series={radarChartSeries} type="radar" width={"100%"} />
    // </div>
  );
}

export default RadarChart;
