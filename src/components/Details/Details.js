import React from "react";
import styles from "./Details.module.css";

const Details = () => {
  return (
    <div>
      <div className={styles.detailsHeader}>
        <div className={styles.coin}>
            <div>BTC-USDT</div>
            <span>15.715<p>+15.2%</p></span>
        </div>
        <div className={styles.buySellButton}>
           <button className="btn btn-warning text-white font-weight-bold">Buy/Sell</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
