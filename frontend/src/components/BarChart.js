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
      offsetX: 10, // Adjust horizontal position
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
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#333",
          fontSize: "14px",
          fontWeight: "bold",
        },
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
    },
  };

  const barChartSeries = [
    {
      name: "Proficiency",
      data: data.map((lang) => lang.percentage),
    },
  ];

  return (
    <div>
      <Chart options={barChartOptions} series={barChartSeries} type="bar" width={"100%"} />
    </div>
  );
}

export default BarChart;
