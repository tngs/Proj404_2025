import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./LoginPage.module.css";
import {
  postMakeAdministrator,
  postLogin,
} from "../../../utilities/URLs/administration-service";
import { adminLogin } from "../../../redux/actions/admin";
import { toast } from "react-toastify";

const LoginForm = () => {
  const location = useLocation();
  // console.log("location?.state", location?.state);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const [isSignupMode, setIsSignupMode] = useState(
    location?.state?.isSignUp ? location.state.isSignUp : false
  );
  const [formData, setFormData] = useState({
    administratorName: "",
    email: "",
    password: "",
    confirmPassword: "",

    username: "",
  });
  const createAdmin = (administratorName, email, password) => {
    postMakeAdministrator({ administratorName, email, password }
    ).then((obj) => {
      toast.success("Administrator created successfully");
      setIsSignupMode(false);
    }).catch((err) => {
      toast.error(err.message);
    });
  };
  const loginAdmin = (email, password) => {
    postLogin({email, password}).then(obj => {
      dispatch(adminLogin(obj.data))
      navigate("/admin");
    })
    .catch((err) => {
      toast.error(err.message);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { administratorName, email, password, confirmPassword } = formData;

    if (isSignupMode) {
      if (!administratorName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields!");
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      createAdmin(administratorName, email, password);
      //TODO later check conditions
      setIsSignupMode(false);
    } else {
      if (!email || !password) {
        alert("Please fill in email and password!");
        return;
      }
      loginAdmin(email, password);
      // navigate(`/admin`);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.projectTitle}>🚚 Cargo Service Platform</h1>
        <p className={styles.subtitle}>by Team 505</p>
      </header>
      <main className={styles.formWrapper}>
        <h2 className={styles.title}>Admin Login</h2>
        <p className={styles.description}>Log in as admin</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {isSignupMode && (
            <div className={styles.inputGroup}>
              <input
                placeholder="AdministratorName"
                type="text"
                id="administratorName"
                name="administratorName"
                value={formData.administratorName}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>
          )}
          <div className={styles.inputGroup}>
            <input
              placeholder="Email"
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
          </div>
            <div className={styles.inputGroup}>
              <input
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>
          {isSignupMode && (
            <div className={styles.inputGroup}>
              <input
                placeholder="Re-type Password"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>
          )}
          <button
            type="submit"
            className={`${styles.button} ${styles.buttonPrimary}`}
          >
            {isSignupMode ? "Sign Up" : "Login"}
          </button>
          <button
            type="button"
            onClick={() => setIsSignupMode(!isSignupMode)}
            className={`${styles.button} ${styles.buttonSecondary}`}
          >
            {isSignupMode
              ? "Already have an account? Login"
              : "Create an Account"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default LoginForm;
