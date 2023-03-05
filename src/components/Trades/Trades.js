import { useEffect, useState } from "react";
import useTrades from "../../hooks/useTrades";
import styles from "./Trades.module.css";

const Trades = () => {
    const [trades] = useTrades();
    const [tradesData, setTradesData] = useState([]);
    useEffect(() => {
        if (trades === undefined) return
        setTradesData(trades)
    }, [trades])
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
                    {tradesData.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.orders.symbolId}</td>
                                <td>{item.orders.quantity}</td>
                                <td>{item.orders.price}</td>
                                <td>{item.createdAt}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
};

export default Trades;
