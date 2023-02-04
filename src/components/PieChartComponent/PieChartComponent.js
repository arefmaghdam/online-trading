import React, { Component } from "react";
import Chart from "react-google-charts";
import styles from "./PieChartComponent.module.css";
const pieData = [
  ["Task", "Hours per Day"],
  ["Blocked", 11],
  ["Withdrawable", 2],
  ["Pending", 2],
  ["Profit/Loss", 2],
];
const pieOptions = {
  pieHole: 0,
  backgroundColor: "#3D3D3D",
  chartArea: {
    left: "1%",
    top: "1%",
    height: "78%",
    width: "100%",
  },
};

const PieChartComponent = () => {
  return (
    <div className={styles.chart}>
      <Chart
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={pieData}
        options={pieOptions}
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
};

export default PieChartComponent;
