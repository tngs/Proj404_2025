import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { logout } from '../redux/authSlice';
import styles from "./NavigationBar.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/account";
import { homeIcon, logoutIcon, loginIcon, documentIcon } from "../../components/icon";

const NavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const role = account.user.role;
  const loggedIn = account.loggedIn;
  const username = account.user ? account.user.username : "";
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleLogin = () => {
    // dispatch(logout());
    navigate("/login");
  };

  const goToProfile = () => {
    navigate("./profile/" + username);
  };
  const goToHome = () => {
    navigate("/");
  };
const goToMyPage = () => {
    navigate("/" + role);
  };
  return (
    <div className={styles.navbar}>
      <button className={styles.icons} onClick={goToHome}>
        <img src={homeIcon} alt="Home" className={styles.icon} />
      </button>
      {loggedIn ? <button className={styles.icons} onClick={handleLogout}>
        <img src={logoutIcon} alt="Logout" className={styles.icon} />
      </button>:
      <button className={styles.icons} onClick={handleLogin}>
        <img src={loginIcon} alt="Login" className={styles.icon} />
      </button>}
      {role != "user" && loggedIn && <button className={styles.icons} onClick={goToMyPage}>
        <img src={documentIcon} alt="mypage" className={styles.icon} />
      </button>}
      <div className={styles.spacer} />
      {loggedIn && <img
        src={account?.user?.profilePic}
        alt="Profile Picture"
        className={styles["profile-pic"]}
        onClick={goToProfile}
      />}
    </div>
  );
};

export default NavigationBar;
