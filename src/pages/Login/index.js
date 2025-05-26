import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { test } from "../../redux/actions/test"; // Import your test reducer

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAuthentication = () => {
    navigate("/user");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.projectTitle}>🚚 Cargo Service Platform</h1>
        <p className={styles.subtitle}>by Team 505</p>
      </header>
      <main className={styles.formWrapper}>
        <h2 className={styles.title}>Welcome Back 👋</h2>
        <p className={styles.description}>
          Log in to manage your cargo services efficiently.
        </p>
        <LoginForm onAuthenticate={handleAuthentication} />
      </main>
    </div>
  );
};

export default LoginPage;
