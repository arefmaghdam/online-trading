import Chart from "react-google-charts";
import styles from "./PieChartComponent.module.css";
const pieData = [
  ["Items", "Markets"],
  ["Blocked", 11],
  ["Withdrawable", 5],
  ["Pending", 7],
  ["Profit/Loss", 2],
];
const pieOptions = {
  pieHole: 0,
  backgroundColor: "#3D3D3D",
  chartArea: {
    left: "1%",
    top: "3%",
    height: "74%",
    width: "100%",
  },
  legend: { alignment: "center", textStyle: { color: "white" } },
  slices: {
    0: { color: "#fa6161" },
    1: { color: "rgb(70, 189, 6)" },
    2: { color: "#fbc223" },
    3: { color: "#248bf3" },
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
