import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./index.module.css";
import {
  signup as signupAction,
  login as loginAction,
} from "../../redux/actions/account";
import { ACCOUNT } from "../../redux/actions/types";
import { toast } from "react-toastify";
import { tokenSave } from "../../redux/actions/token";

const LoginPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignupMode, setIsSignupMode] = useState(
    location?.state?.isSignUp || false
  );
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    address: "",
    password: "",
    confirmPassword: "",
    role: location?.state?.role || "user",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password, confirmPassword, role, email, address } =
      formData;

    if (isSignupMode) {
      if (password != confirmPassword) {
        toast.info("passwords do not match");
      } else
        dispatch(signupAction({ username, password, role, email, address }))
          .then((result) => {
            const { type, message } = result;
            console.log("result", result);
            if (type === ACCOUNT.SIGNUP_SUCCESS) {
              toast.success(message);
              setIsSignupMode(false);
            } else {
              toast.error(message.message);
            }
          })
          .catch((error) => {
            toast.error(error.message);
          });
    } else {
      dispatch(loginAction({ email, password, role }))
        .then((result) => {
          const { type, message } = result;
          if (type === ACCOUNT.LOGIN_SUCCESS) {
            toast.success(message);
            if (role === "user") {
              navigate(`/`);
            } else if (role === "transporter") {
              navigate(`/transporter`);
            } else {
              toast.error(message);
            }
          } else {
            toast.error(message);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.message);
        });
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.projectTitle}>🚚 Cargo Service Platform</h1>
        <p className={styles.subtitle}>by Team 505</p>
      </header>

      <main className={styles.formWrapper}>
        <h2 className={styles.title}>
          {isSignupMode ? "Create Account" : "Welcome Back 👋"}
        </h2>
        <p className={styles.description}>
          {isSignupMode
            ? "Register to get started"
            : "Log in to manage your cargo services efficiently."}
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
          </div>

          {isSignupMode && (
            <>
              <div className={styles.inputGroup}>
                <input
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  placeholder="Company Address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
            </>
          )}

          <div className={styles.inputGroup}>
            <input
              placeholder="Password"
              type="password"
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

export default LoginPage;
