import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./LoginForm.module.css";
import { signup, login } from "../../redux/actions/account"; // Import your action
import { ACCOUNT } from '../../redux/actions/types';
import { useLocation } from "react-router-dom";

import { postLogin as userLogin } from "../../utilities/URLs/transport-user-service";
import { postLogin as transLogin, postTransporter} from "../../utilities/URLs/transporter-service";

const LoginForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const [isSignupMode, setIsSignupMode] = useState(location?.state?.isSignUp ? location.state.isSignUp : false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    role: location?.state?.role ? location.state.role : "user",
  });
  const createAccount = (username, password, role) => {
    if(role == "transporter") {
      postTransporter({username, password}).then(obj => console.log('obj', obj))
    }
    const result = dispatch(signup({ username, password, role })).type; // Dispatch signup action
  
    return result; // Simulate successful account creation
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, confirmPassword, role } = formData;

    if (isSignupMode) {
      if(!username || !password || !confirmPassword) {
        alert("Please fill in all fields!");
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      const result = createAccount(username, password, role);
      if (result === ACCOUNT.SIGNUP_SUCCESS) {
        alert("Account created successfully! You can now log in.");
        setIsSignupMode(false);
      } else if (result === ACCOUNT.SIGNUP_UNSUCCESS) {
        alert("Username already exists. Please choose a different one.");
      } else if (result === ACCOUNT.SIGNUP_ERROR) {
        alert("Error creating account.");
      } else {
        alert("Sorry, something went wrong, but we don't know what.");
      }
    } else {
      if(!username || !password) {
        alert("Please fill in all fields!");
        return;
      }
      if(role == "user") {
        userLogin({username, password}).then(obj => console.log('obj', obj))
      }
      if(role == "transporter") {
        transLogin({username, password}).then(obj => console.log('obj', obj))
      }
      const result = dispatch(login({username, password, role}))?.type; // Dispatch login action with user data
      if (result === ACCOUNT.LOGIN_SUCCESS) {
        navigate(`/${role}`); // Redirect to the appropriate route based on role
      } else if (result === ACCOUNT.LOGIN_UNSUCCESS) {
        alert("Invalid username, password, or role.");
      } else if (result === ACCOUNT.LOGIN_ERROR) {
        alert("Error logging in.");
      } else {
        alert("Sorry, something went wrong, but we don't know what.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <input
          placeholder="Username"
          type="text"
          id="username"
          name="username"
          value={formData.username}
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
        {isSignupMode ? "Already have an account? Login" : "Create an Account"}
      </button>
    </form>
  );
};

export default LoginForm;
