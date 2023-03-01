import { useEffect, useState } from "react";
import useOrders from "../../hooks/useOrders";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./Report.module.css";

const Report = () => {
  const [orders] = useOrders();
  const [ordersData, setOredrsData] = useState([]);
  useEffect(() => {
    if (orders === undefined) return;
    setOredrsData(orders);
  }, [orders]);
  return (
    <div className={styles.reportComponent}>
      <div className={styles.reportMenu}>
        <ul className={styles.report}>
          <li>Orders</li>
          <li>Transactions</li>
        </ul>
      </div>
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
    </div>
  );
};

export default Report;
