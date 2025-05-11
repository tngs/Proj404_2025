import { ACCOUNT } from "./types";
import accountDB from "../../accountDB.json";
import { store, persistor } from "../../index";
import fetchStates from "../fetchStates";

export const signup = ({ username, password, role }) => {
  return (dispatch) => {
    dispatch({ type: ACCOUNT.SIGNING_UP, status: fetchStates.fetching });
    if (
      accountDB?.find(
        (user) => user.username === username && user.role === role
      )
    ) {
      dispatch({
        type: ACCOUNT.SIGNUP_UNSUCCESS,
        status: fetchStates.error,
        message: "User already exists",
      });
      return {
        type: ACCOUNT.SIGNUP_UNSUCCESS,
        status: fetchStates.error,
        message: "User already exists",
      };
    }
    console.log("Creating new user");
    accountDB.push({ username, password, role });
    dispatch({
      type: ACCOUNT.SIGNUP_SUCCESS,
      status: fetchStates.success,
      payload: { username, password, role },
      message: "User created successfully",
    });
    return {
      type: ACCOUNT.SIGNUP_SUCCESS,
      status: fetchStates.success,
      payload: { username, password, role },
      message: "User created successfully",
    };
  };
};

const passwordExtractor = (account) => {
  if (!account) {
    return null;
  }
  const { password, ...accountWithoutPassword } = account;
  return accountWithoutPassword;
};

export const login = ({ username, password, role }) => {
  return (dispatch) => {
    dispatch({ type: ACCOUNT.LOGING_IN, status: fetchStates.fetching });
    if (!username || !password || !role) {
      dispatch({
        type: ACCOUNT.LOGIN_ERROR,
        status: fetchStates.error,
        message: "LOGIN_ERROR: Please check your input!!!",
      });
      return {
        type: ACCOUNT.LOGIN_ERROR,
        status: fetchStates.error,
        message: "LOGIN_ERROR: Please check your input!!!",
      };
    }
    const account = accountDB?.find(
      (user) =>
        user.username === username &&
        user.password === password &&
        user.role === role
    );
    const accountWithoutPassword = passwordExtractor(account);
    if (accountWithoutPassword) {
      dispatch({
        type: ACCOUNT.LOGIN_SUCCESS,
        status: fetchStates.success,
        message: "Login successful",
        payload: accountWithoutPassword,
      });
      return {
        type: ACCOUNT.LOGIN_SUCCESS,
        status: fetchStates.success,
        message: "Login successful",
        payload: accountWithoutPassword,
      };
    } else {
      dispatch({
        type: ACCOUNT.LOGIN_UNSUCCESS,
        status: fetchStates.error,
        message: "LOGIN_UNSUCCESS: Invalid username, password, or role",
      });
      return {
        type: ACCOUNT.LOGIN_UNSUCCESS,
        status: fetchStates.error,
        message: "LOGIN_UNSUCCESS: Invalid username, password, or role",
      };
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: ACCOUNT.LOGOUT,
      message: "Logged out",
    });
    persistor.purge(); // Clear persisted state
    return {
      type: ACCOUNT.LOGOUT,
      message: "Logged out",
    };
  };
};

export const updateAccount = (userToUpdateTo) => {
  const index = accountDB.findIndex(
    (user) =>
      user.username === userToUpdateTo.username &&
      user.role === userToUpdateTo.role
  );
  
  if (index !== -1) {
    accountDB[index] = userToUpdateTo;
  }
  return (dispatch) => {
    dispatch({
      type: ACCOUNT.UPDATE,
      message: "Account updated",
      payload: userToUpdateTo,
    });
    return {
      type: ACCOUNT.UPDATE,
      message: "Account updated",
      payload: userToUpdateTo,
    };
  };
};