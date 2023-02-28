import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./Report.module.css";

const Report = () => {
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
              <tr>
                <td>BTC-USDT</td>
                <td>0.000514</td>
                <td>16.75105</td>
                <td>Buy</td>
                <td>22-12-2022 12:35 AM</td>
                <td>26-12-2022 16:18 AM</td>
                <td>Executing</td>
                <td>
                  <ProgressBar />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
