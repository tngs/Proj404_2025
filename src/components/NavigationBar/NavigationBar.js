import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { logout } from '../redux/authSlice';
import styles from "./NavigationBar.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/account";
import { home as homeIcon, logout as logoutIcon } from "../icon";

const NavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const username = account.user ? account.user.username : "";
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const goToProfile = () => {
    navigate("./profile/" + username);
  };
  const goToHome = () => {
    navigate("/" + account.user.role);
  };

  return (
    <div className={styles.navbar}>
      <button className={styles.logoutButton} onClick={goToHome}>
        <img src={homeIcon} alt="Home" className={styles.icon} />
      </button>
      <button className={styles.logoutButton} onClick={handleLogout}>
        <img src={logoutIcon} alt="Logout" className={styles.icon} />
      </button>
      <div className={styles.spacer}></div>
      <img
        src={account?.user?.profilePic}
        alt="Profile Picture"
        class={styles["profile-pic"]}
        onClick={goToProfile}
      />
    </div>
  );
};

export default NavigationBar;
