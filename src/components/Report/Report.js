import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import config from "../../config";
import useOrders from "../../hooks/useOrders";
import getAPI from "../GetAPI/getAPI";
import postAPIWiyhoutData from "../PostAPI/postAPI";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./Report.module.css";

const Report = () => {
  const [orders] = useOrders();
  const [ordersData, setOredrsData] = useState([]);
  const orderUpdate = useSelector((state) => state.signalR.order);

  useEffect(() => {
    if (orders.length == 0 || orders == undefined) return;
    postAPIWiyhoutData(`${config.OT_URL}Subscribe/OrderUpdates`);
    getData();
  }, [orders]);

  useEffect(() => {
    if (orderUpdate.length == 0) return;
    let orders = [...ordersData, orderUpdate];
    setOredrsData(orders);
  }, [orderUpdate]);

  const getData = () => {
    let promise = getAPI(`${config.OT_URL}OrderManagement/Order`).then(
      (resp) => {
        if (resp === undefined || resp.length === 0) return;
        setOredrsData(resp);
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };

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
