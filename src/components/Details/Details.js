import React from "react";
import styles from "./Details.module.css";

const Details = () => {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsHeader}>
        <div className={styles.coin}>
          <div>BTC-USDT</div>
          <span>
            15.715<p>+15.2%</p>
          </span>
        </div>
        <div className={styles.buySellButton}>
          <button className="btn btn-warning text-white font-weight-bold">
            Buy/Sell
          </button>
        </div>
      </div>
      <div className={styles.detailsTable}>
        <div className={styles.detailsTableItems}>
          <div>
            <table className={`table ${styles.table}`}>
              <tbody>
                <tr>
                  <td>Value</td>
                  <td>61.010.978,4405201</td>
                </tr>
                <tr>
                  <td>Volume</td>
                  <td>3.649,9346624</td>
                </tr>
                <tr>
                  <td>High Price</td>
                  <td>16.800</td>
                </tr>
                <tr>
                  <td>Low Price</td>
                  <td>16.850</td>
                </tr>
                <tr>
                  <td>Close Price</td>
                  <td>16.715</td>
                </tr>
                <tr>
                  <td>Open Price</td>
                  <td>16.710</td>
                </tr>
                <tr>
                  <td>Last Trade Time</td>
                  <td>
                    13:39:10<p>26-12-2022</p>
                  </td>
                </tr>
                <tr>
                  <td>Markets</td>
                  <td>USDS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
