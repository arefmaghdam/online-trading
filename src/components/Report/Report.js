import { useEffect, useState } from "react";
import config from "../../config";
import useOrders from "../../hooks/useOrders";
import getAPI from "../GetAPI/getAPI";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./Report.module.css";

const Report = () => {
  const [orders] = useOrders();
  const [ordersData, setOredrsData] = useState([]);

  const getData = () => {
    getAPI(`${config.OT_URL}OrderManagement/Order`).then(
      (resp) => {
        if (resp == undefined) return
        setOredrsData(resp);
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    if (orders === undefined) return;
    setOredrsData(orders);
  }, [orders]);
  return (
    <div className={styles.reportContent}>
      <div className={styles.table}>
        <table className={`table ${styles.tableContent}`}>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Order Side</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Status</th>
              <th>
                <div>Progress</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.symbolId}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.orderSide}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.updatedAt}</td>
                  <td>{item.status}</td>
                  <td>
                    <ProgressBar />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
