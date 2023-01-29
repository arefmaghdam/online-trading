import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="row">
        <div className={`col-sm-12 ${styles.header}`}>header</div>
      </div>
      <div className="row ">
        <div
          className={`col-sm-4 ${styles.box} ${styles.color1} ${styles.watchlist}`}
        >
          watchlist
        </div>
        <div
          className={`col-sm-3 ${styles.box} ${styles.color1} ${styles.details}`}
        >
          details
        </div>
        <div
          className={`col-sm-5 ${styles.box} ${styles.color1} ${styles.orderbook}`}
        >
          orderbook
        </div>
      </div>
      <div className="row">
        <div
          className={`col-sm-4 ${styles.box} ${styles.color2} ${styles.overview}`}
        >
          overview
        </div>
        <div
          className={`col-sm-8 ${styles.box} ${styles.color2} ${styles.report}`}
        >
          report
        </div>
      </div>
    </div>
  );
};

export default Layout;
