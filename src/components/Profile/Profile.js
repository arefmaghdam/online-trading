import { FaUserCircle } from "react-icons/fa";
import styles from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={`shadow-lg p-3 mb-5 bg-white rounded ${styles.profile}`}>
          <div><FaUserCircle/></div>
          <h6>Taha Mohammadi</h6>
          <a href="">Log out</a>
        </div>
    )
}

export default Profile;