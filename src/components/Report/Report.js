import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import config from "../../config";
import useOrders from "../../hooks/useOrders";
import getAPI from "../GetAPI/getAPI";
import postAPIWiyhoutData from "../PostAPI/postAPI";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./Report.module.css";
import { MdCancel } from "react-icons/md";
import DeleteAPI from "../DeleteAPI/DeleteAPI";

const Report = () => {
  const [orders] = useOrders();
  const [ordersData, setOredrsData] = useState([]);
  const [ordersId, setOrdersId] = useState(-1);
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
    console.log(ordersData);
  }, [orderUpdate]);

  useEffect(() => {
    if (ordersId == undefined || ordersId < 0) return;
    console.log(ordersId);
    DeleteAPI(`${config.OT_URL}OrderManagement/Order/${ordersId}`);
  }, [ordersId]);

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

  const removeOrderHandler = (e) => {
    let selectId = e.currentTarget.id;
    setOrdersId(selectId);
  };

  return (
    <div className={styles.reportContent}>
      <div className={styles.table}>
        <table className={`table ${styles.tableContent}`}>
          <thead>
            <tr>
              <th>Cancel</th>
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
            {ordersData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    {/* <span>{item.id}</span> */}
                    <button
                      id={item.id}
                      onClick={removeOrderHandler}
                      className={`btn ${styles.editCancel}`}
                    >
                      <MdCancel />
                    </button>
                  </td>
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
