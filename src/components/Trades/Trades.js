import styles from "./Trades.module.css";

const Trades = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.orders}>Orders</div>
        <div className={styles.trades}>Trades</div>
    </div>
    <div className={styles.tradeContent}>
        <div className={styles.table}>
            <table className={`table ${styles.tableContent}`}>
                <thead>
                    <tr>
                        <th>SymbolID</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>CreatedAt</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
};

export default Trades;
