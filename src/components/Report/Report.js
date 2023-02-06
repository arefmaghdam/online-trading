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
              <tr>
                <td>BTC-USDT</td>
                <td>0.000035</td>
                <td>16.75008</td>
                <td>Buy</td>
                <td>22-12-2022 12:45 AM</td>
                <td>27-12-2022 16:18 AM</td>
                <td>Executing</td>
                <td>
                  <ProgressBar />
                </td>
              </tr>
              <tr>
                <td>SHIBA-USDT</td>
                <td>751</td>
                <td>2.35126</td>
                <td>Sell</td>
                <td>23-12-2022 17:45 AM</td>
                <td>24-12-2022 21:28 AM</td>
                <td>Pending</td>
                <td>
                  <ProgressBar />
                </td>
              </tr>
              <tr>
                <td>SHIBA-USDT</td>
                <td>751</td>
                <td>2.35126</td>
                <td>Sell</td>
                <td>23-12-2022 17:45 AM</td>
                <td>24-12-2022 21:28 AM</td>
                <td>Pending</td>
                <td>
                  <ProgressBar />
                </td>
              </tr>
              <tr>
                <td>SHIBA-USDT</td>
                <td>751</td>
                <td>2.35126</td>
                <td>Sell</td>
                <td>23-12-2022 17:45 AM</td>
                <td>24-12-2022 21:28 AM</td>
                <td>Pending</td>
                <td>
                  <ProgressBar />
                </td>
              </tr>
              <tr>
                <td>SHIBA-USDT</td>
                <td>751</td>
                <td>2.35126</td>
                <td>Sell</td>
                <td>23-12-2022 17:45 AM</td>
                <td>24-12-2022 21:28 AM</td>
                <td>Pending</td>
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
