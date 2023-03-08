import styles from "./Layout.module.css";
import Menu from "../Menu/Menu";
import Search from "../Search/Search";
import User from "../User/User";
import Watchlist from "../Watchlist/Watchlist";
import Details from "../Details/Details";
import Overview from "../Overview/Overview";
import Report from "../Report/Report";
import Orderbook from "../Orderbook/Orderbook";
import { FaChevronLeft, FaChevronRight, FaUserCircle } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Trades from "../Trades/Trades";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  const [showMenu, setStatus] = useState(false);

  const showSideBarMenu = () => setStatus(!showMenu);

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
          <div
            className={`${styles.box2} ${styles.color1} ${styles.detailsContent}`}
          >
            <Details />
            <div
              class={`${styles.placeOrderForm} ${styles.box3} ${
                showMenu == true ? styles.show : styles.hide
              }`}
            >
              <Sidebar />
            </div>
            <div
              onClick={showSideBarMenu}
              className={`${styles.sideMenu} ${
                showMenu == true ? styles.showState : styles.hideState
              }`}
            >
              {showMenu == true ? <FaChevronLeft /> : <FaChevronRight />}
            </div>
          </div>
        </div>
        <div
          className={`col-sm-5 ${styles.orderbook} ${
            showMenu == true ? styles.showState : styles.hideState
          }`}
        >
          <div className={`${styles.box} ${styles.color1}`}>
            <Orderbook />
          </div>
        </div>
      </div>
      <div className="row">
        <div className={`col-sm-4 ${styles.overview}`}>
          <div className={`${styles.box} ${styles.color2}`}>
            <Overview />
          </div>
        </div>
        <div className={`col-sm-8  ${styles.report}`}>
          <div
            className={`${styles.box1} ${styles.color2} ${styles.reportComponent}`}
          >
            <Tabs className={styles.tabContainer}>
              <TabList className={styles.tabs}>
                <Tab className={styles.tab}>Orders</Tab>
                <Tab className={styles.tab}>Trades</Tab>
              </TabList>
              <TabPanel className={styles.orders}>
                <Report />
              </TabPanel>
              <TabPanel className={styles.trades}>
                <Trades />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
