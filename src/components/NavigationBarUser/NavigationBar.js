import styles from "./NavigationBar.module.css";

import { useLocation, useNavigate } from "react-router-dom";
import NavButton from "../Button/NavButton"

import { useSelector,useDispatch } from "react-redux";
import { logout } from "../../redux/actions/account";

const NavigationBarUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const location = useLocation();
  const role = "user";
  const loggedIn = account.loggedIn;
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
  const goToHome = () => {
    navigate("/");
  };
  const goToUnpaidOrders = () => {
    navigate("/unpaid-orders");
  };
  const goToPaidOrders = () => {
    navigate("/paid-orders");
  };
  const handleLoginAsTransporter = () => {
    navigate("/login", { state: { role: "transporter", isSignUp: false } });
  };
  return (
    <div className={styles.navbar}>
      <NavButton onClick={goToHome}>Home</NavButton>
      {location.pathname!="/unpaid-orders" && location.pathname!="/unpaid-orders/" && <NavButton onClick={goToUnpaidOrders}>Unpaid Orders</NavButton>}
      {location.pathname!="/paid-orders" && location.pathname!="/paid-orders/" && <NavButton onClick={goToPaidOrders}>Paid Orders</NavButton>}
      
      <div className={styles.spacer} />
      <NavButton onClick={handleLoginAsTransporter}>Log in as transporter</NavButton>
      {!loggedIn && <NavButton onClick={handleLogin}>Log in</NavButton>}
      {!loggedIn && <NavButton onClick={handleSignup}>Sign-up</NavButton>}
      {loggedIn && <NavButton onClick={handleLogout}>Log out</NavButton>}

    </div>
  );
};

export default NavigationBarUser;
