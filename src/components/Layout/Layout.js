import styles from "./Layout.module.css";
import Menu from "../Menu/Menu";
import Search from "../Search/Search";
import User from "../User/User";
import Watchlist from "../Watchlist/Watchlist";
import Details from "../Details/Details";
import Overview from "../Overview/Overview";

const Layout = () => {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="row">
        <div className={`col-sm-12 ${styles.header}`}>
          <div className={`${styles.headerContent} ${styles.color1}`}>
            <div className={`container-fluid`}>
              <div className="row">
                <div className="col-md-4">
                  <Menu />
                </div>
                <div className="col-md-4">
                  <Search />
                </div>
                <div className="col-md-4">
                  <User />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className={`col-sm-4  ${styles.watchlist}`}>
          <div className={`${styles.box} ${styles.color1}`}>
            <Watchlist />
          </div>
        </div>
        <div className={`col-sm-3  ${styles.details}`}>
          <div className={`${styles.box} ${styles.color1}`}>
            <Details />
          </div>
        </div>
        <div className={`col-sm-5  ${styles.orderbook}`}>
          <div className={`${styles.box} ${styles.color1}`}>orderbook</div>
        </div>
      </div>
      <div className="row">
        <div className={`col-sm-4 ${styles.overview}`}>
          <div className={`${styles.box} ${styles.color2}`}>
            <Overview />
          </div>
        </div>
        <div className={`col-sm-8  ${styles.report}`}>
          <div className={`${styles.box} ${styles.color2}`}>report</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
