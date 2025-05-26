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
  const loggedIn = account.loggedIn;
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const goToOrders = () => {
    navigate("/transporter/orders");
  };
  const goToServices = () => {
    navigate("/transporter");
  };
  const goToMakeService = () => {
    navigate("/transporter/make-service");
  }
  return (
    <div className={styles.navbar}>
      {location.pathname!="/transporter" && location.pathname!="/transporter/" && <NavButton onClick={goToServices}>Services</NavButton>}
      {location.pathname!="/transporter/orders" && location.pathname!="/transporter/orders/" && <NavButton onClick={goToOrders}>Orders</NavButton>}
      {location.pathname!="/transporter/make-service" && location.pathname!="/transporter/make-service/" && <NavButton onClick={goToMakeService}>Make service</NavButton>}
      
      <div className={styles.spacer} />
      {loggedIn && <NavButton onClick={handleLogout}>Log out</NavButton>}

    </div>
  );
};

export default NavigationBarUser;
