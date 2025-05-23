import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { logout } from '../redux/authSlice';
import styles from "./NavigationBar.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/account";
import {
  homeIcon,
  logoutIcon,
  loginIcon,
  documentIcon,
} from "../../components/icon";
import NavButton from "../Button/NavButton"

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
    navigate("/login", {state: {role: "user", isSignUp: false}});
  };
  const handleSignup = () => {
    navigate("/login", {state: {role: "user", isSignUp: true}});
  };
  const goToProfile = () => {
    navigate("/profile/" + username);
  };
  const goToHome = () => {
    navigate("/");
  };
  const goToMyPage = () => {
    navigate("/" + role);
  };
  const handleLoginAsTransporter = () => {
    navigate("/login", {state: {role: "transporter", isSignUp: false}});
  }; 
  return (
    <div className={styles.navbar}>
      <NavButton onClick={goToHome}>Home</NavButton>
      {role=="user" && <NavButton onClick={handleLoginAsTransporter}>Log in as transporter</NavButton>}
      {role=="transporter" && <NavButton onClick={goToMyPage}>Transporter ist</NavButton>}
      {/* <button className={styles.icons} onClick={goToHome}>
        <img src={homeIcon} alt="Home" className={styles.icon} />
      </button> */}
      {/* {loggedIn ? (
        <button className={styles.icons} onClick={handleLogout}>
          <img src={logoutIcon} alt="Logout" className={styles.icon} />
        </button>
      ) : (
        <button className={styles.icons} onClick={handleLogin}>
          <img src={loginIcon} alt="Login" className={styles.icon} />
        </button>
      )}
      {role !== "user" && loggedIn && (
        <button className={styles.icons} onClick={goToMyPage}>
          <img src={documentIcon} alt="mypage" className={styles.icon} />
        </button>
      )} */}
      <div className={styles.spacer} />
      {!loggedIn && <NavButton onClick={handleLogin}>Log in</NavButton>}
      {!loggedIn && <NavButton onClick={handleSignup}>Sign-up</NavButton>}
      {loggedIn && <NavButton onClick={handleLogout}>Log out</NavButton>}
      {loggedIn && <NavButton onClick={goToProfile}>Profile</NavButton>}
{/*       
fontWeight: "bold",;
    fontFamily: "system-ui";
      {loggedIn && (
        <img
          src={account?.user?.profilePic}
          alt="Profile"
          className={styles["profile-pic"]}
          onClick={goToProfile}
        />
      )} */}
    </div>
  );
};

export default NavigationBar;
