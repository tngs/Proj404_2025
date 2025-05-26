import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/account";
import NavButton from "../Button/NavButton"

const NavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const goToServices = () => {
    navigate("/admin");
  };
  const goToUsers = () => {
    navigate("/admin/users");
  };
  const goToTransporters = () => {
    navigate("/admin/transporters");
  };
  return (
    <div className={styles.navbar}>
      {location.pathname != "/admin" && location.pathname != "/admin/" && <NavButton onClick={goToServices}>Services</NavButton>}
      {location.pathname != "/admin/users" && <NavButton onClick={goToUsers}>Users</NavButton>}
      {location.pathname != "/admin/transporters" && <NavButton onClick={goToTransporters}>Transporters</NavButton>}

      <div className={styles.spacer} />

      <NavButton onClick={handleLogout}>Log out</NavButton>
    </div>
  );
};

export default NavigationBar;
