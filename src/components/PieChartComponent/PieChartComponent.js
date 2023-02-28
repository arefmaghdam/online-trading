import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import useOverview from "../../hooks/useOverview";
import styles from "./PieChartComponent.module.css";

const PieChartComponent = () => {
  const [overview] = useOverview({});
  const [overviewData, setOverviewData] = useState([]);
  useEffect(() => {
    if (overview == undefined) return;
    setOverviewData(overview);
  }, [overview]);
  const pieData = [
    ["Items", "Markets"],
    ["Blocked", overviewData.blocked],
    ["Withdrawable", overviewData.withdrawable],
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
      1: { color: "rgb(70, 189, 6)" }
    },
  };
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
