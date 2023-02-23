import styles from "./Orderbook.module.css";

const Orderbook = () => {
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
          <tr>
            <td>352.148</td>
            <td>252.148</td>
            <td>16.715</td>
            <td>16.716</td>
            <td>250</td>
            <td>352.148</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orderbook;
