import useDetails from "../../hooks/useDetails";
import styles from "./Details.module.css";

const Details = () => {
  const [details] = useDetails();
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsHeader}>
        <div className={styles.coin}>
          <div>{details.symbolId}</div>
          <span>
            {details.lastPrice}
            <p>{details.changePercentage}</p>
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
                  <td>{details.volumeValue}</td>
                </tr>
                <tr>
                  <td>Volume</td>
                  <td>{details.volume}</td>
                </tr>
                <tr>
                  <td>High Price</td>
                  <td>{details.highPrice}</td>
                </tr>
                <tr>
                  <td>Low Price</td>
                  <td>{details.lowPrice}</td>
                </tr>
                <tr>
                  <td>Close Price</td>
                  <td>{details.closePrice}</td>
                </tr>
                <tr>
                  <td>Open Price</td>
                  <td>{details.openPrice}</td>
                </tr>
                <tr>
                  <td>Last Trade Time</td>
                  <td>{details.timestamp}</td>
                </tr>
                <tr>
                  <td>Markets</td>
                  <td>{details.markets}</td>
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
