import { useEffect, useState } from "react";
import useOrderbook from "../../hooks/useOrderbook";
import styles from "./Orderbook.module.css";

const Orderbook = () => {
  const [orderbook] = useOrderbook({});
  const [orderbookData, setOrderbookData] = useState([]);
  useEffect(() => {
    if (orderbook.bids == undefined) return;
    let askBid = [];
    let bids = orderbook.bids;
    let asks = orderbook.asks;
    for (let item = 0; item < bids.length; item++) {
      const data = {
        bid: bids[item],
        ask: asks[item],
      };
      askBid.push(data);
    }
    setOrderbookData(askBid);
  }, [orderbook]);
  return (
    <div className={styles.Orderbook}>
      <table className={`table ${styles.table}`}>
        <thead>
          <tr>
            <th>Total Quantity</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orderbookData.map((item) => {
            return (
              <tr key={item.ask.price}>
                <td>{item.ask.totalQuantity}</td>
                <td>{item.ask.quantity}</td>
                <td>{item.ask.price}</td>
                <td>{item.bid.price}</td>
                <td>{item.bid.quantity}</td>
                <td>{item.bid.totalQuantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orderbook;
