import styles from "./User.module.css";
import { FaUserCircle } from "react-icons/fa";
import { MdDesktopWindows } from "react-icons/md";
import { useState } from "react";
import Profile from "../Profile/Profile";

const User = () => {
  const [systemClock, setSystemClock] = useState("");
  const [status, setStatus] = useState(false);

  const clock = () => {
    let sc = new Date().toLocaleTimeString();
    setSystemClock(sc);
  };

  const showProfileMenu = () => {
    let displayStatus = false;
    if (status == false) {
      displayStatus = true;
    }
    if (status == true) displayStatus = false;
    setStatus(displayStatus);
  };

  setInterval(clock, 1000);
  return (
    <div className={`container-fluid ${styles.user}`}>
      <div className={`row ${styles.user}`}>
        <div className={`col-md-6 ${styles.user}`}>
          <h4>
            {" "}
            <MdDesktopWindows />
            {"  "}
          </h4>
        </div>
        <div className={`col-md-4 ${styles.user}`}>
          <h6>{systemClock}</h6>
        </div>
        <div onClick={showProfileMenu} className={`col-md-2 ${styles.user}`}>
          <h3>
            {" "}
            <FaUserCircle />{" "}
          </h3>
        </div>
        <div
          className={`${styles.profile} ${
            status == false ? styles.displayFalse : styles.displayTrue
          }`}
        >
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default User;
