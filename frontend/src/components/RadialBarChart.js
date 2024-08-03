/** @format */

import React from "react";
import { Row, Col, Space, Card, List } from "antd";
import Chart from "react-apexcharts";

function RadialBarChart({ data }) {
  const radialBarChartOptions = {
    chart: {
      type: "radialBar",
      toolbar: {
        show: false,
      },
      offsetX: 0, // Adjust horizontal padding
      offsetY: 0, // Adjust vertical padding
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#333",
            fontSize: "14px",
          },
          value: {
            offsetY: 5,
            color: "#333",
            fontSize: "14px",
            show: true,
            formatter: function (val) {
              return `${val}%`;
            },
          },
        },
      },
    },
    labels: data.map((lang) => lang.name),
    colors: ["#00E396", "#FEB019", "#FF4560", "#775DD0", "#3F51B5", "#03A9F4", "#4CAF50", "#F9CE1D", "#FF9800", "#33B2DF"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1", "#FEF0BA", "#FFB9C1", "#D5CFFF", "#A1ABFF", "#A5D8FF", "#AAF7B0", "#F9E6A2", "#FFCA7A", "#81D4FA"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  const radialBarChartSeries = data.map((lang) => lang.percentage);

  return (
    // <div style={{ padding: 0, margin: 0 }}>
    <Chart options={radialBarChartOptions} series={radialBarChartSeries} type="radialBar" width={"100%"} />
    // </div>
  );
}

export default RadialBarChart;
