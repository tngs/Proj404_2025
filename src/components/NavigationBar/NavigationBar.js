import styles from "./NavigationBar.module.css";

import { useNavigate } from "react-router-dom";
import NavButton from "../Button/NavButton"

import { useSelector,useDispatch } from "react-redux";
import { logout } from "../../redux/actions/account";

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
    navigate("/login", { state: { role: "user", isSignUp: false } });
  };
  const handleSignup = () => {
    navigate("/login", { state: { role: "user", isSignUp: true } });
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
    navigate("/login", { state: { role: "transporter", isSignUp: false } });
  };
  return (
    <div className={styles.navbar}>
      <NavButton onClick={goToHome}>Home</NavButton>
      {role == "user" && <NavButton onClick={handleLoginAsTransporter}>Log in as transporter</NavButton>}
      {role == "transporter" && <NavButton onClick={goToMyPage}>Transporter list</NavButton>}

      
      <div className={styles.spacer} />
      {!loggedIn && <NavButton onClick={handleLogin}>Log in</NavButton>}
      {!loggedIn && <NavButton onClick={handleSignup}>Sign-up</NavButton>}
      {loggedIn && <NavButton onClick={handleLogout}>Log out</NavButton>}

    </div>
  );
};

export default NavigationBar;
