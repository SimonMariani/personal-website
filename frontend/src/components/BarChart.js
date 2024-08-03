/** @format */

import React from "react";
import { Row, Col, Space, Card, List } from "antd";
import Chart from "react-apexcharts";

function BarChart({ data }) {
  const barChartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      offsetX: 0, // Adjust horizontal padding
      offsetY: 0, // Adjust vertical padding
      height: "100%", // Ensure the chart takes the full height of its container
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
        barHeight: "70%",
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: 0, // Adjust horizontal position to fit better
      offsetY: 0, // Adjust vertical position
      style: {
        colors: ["#000"],
        fontSize: "14px",
        fontWeight: "bold",
        textAnchor: "start", // Align text
      },
      formatter: function (val) {
        return `${val}%`;
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
        offsetX: 0, // Adjust horizontal label position
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#333",
          fontSize: "14px",
          fontWeight: "bold",
        },
        offsetY: 0, // Adjust vertical label position
      },
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      opacity: 0.8,
    },
    grid: {
      borderColor: "#f1f1f1",
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  };

  const barChartSeries = [
    {
      name: "Proficiency",
      data: data.map((lang) => lang.percentage),
    },
  ];

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <Chart options={barChartOptions} series={barChartSeries} type="bar" width={"100%"} height={600} />
    </div>
  );
}

export default BarChart;
