import { ACCOUNT } from "./types";
import { persistor } from "../reducers";

import {
  postLogin as userLogin,
  postTransportUser as userSignup,
} from "../../utilities/URLs/transport-user-service";
import {
  postLogin as transLogin,
  postTransporter as transSignup,
} from "../../utilities/URLs/transporter-service";

export const signup = ({ username, password, email, address, role }) => {
  return (dispatch) => {
    dispatch({ type: ACCOUNT.SIGNUP_START});
    if (role === "user") {
      return userSignup({ username, password, email, address })
        .then((obj) => {
          if (obj.status === 200) {
            dispatch({
              type: ACCOUNT.SIGNUP_SUCCESS,
              message: "User created successfully",
            });
            return {
              type: ACCOUNT.SIGNUP_SUCCESS,
              message: "User created successfully",
            };
          } else {
            dispatch({
              type: ACCOUNT.SIGNUP_UNSUCCESS,
              message: "User not created",
            });
            return {
              type: ACCOUNT.SIGNUP_UNSUCCESS,
              message: "User not created",
            };
          }
        })
        .catch((err) => {
          dispatch({
            type: ACCOUNT.SIGNUP_ERROR,
            message: err,
          });
          return {
            type: ACCOUNT.SIGNUP_ERROR,
            message: err,
          };
        });
    } else if (role === "transporter") {
      return transSignup({ username, password, email, address })
        .then((obj) => {
          if (obj.status === 200) {
            dispatch({
              type: ACCOUNT.SIGNUP_SUCCESS,
              message: "User created successfully",
            });
            return {
              type: ACCOUNT.SIGNUP_SUCCESS,
              message: "User created successfully",
            };
          } else {
            dispatch({
              type: ACCOUNT.SIGNUP_UNSUCCESS,
              message: "User not created",
            });
            return {
              type: ACCOUNT.SIGNUP_UNSUCCESS,
              message: "User not created",
            };
          }
        })
        .catch((err) => {
          dispatch({
            type: ACCOUNT.SIGNUP_ERROR,
            message: err,
          });
          return {
            type: ACCOUNT.SIGNUP_ERROR,
            message: err,
          };
        });
    } else {
      dispatch({
        type: ACCOUNT.SIGNUP_ERROR,
        message: "Wrong type",
      });
      return {
        type: ACCOUNT.SIGNUP_ERROR,
        message: "Wrong type",
      };
    }
  };
};

export const login = ({ username, password, role }) => {
  return (dispatch) => {
    dispatch({ type: ACCOUNT.LOGIN_START });
    if (!username || !password || !role) {
      dispatch({
        type: ACCOUNT.LOGIN_UNSUCCESS,
        message: "Input not valid",
      });
      return {
        type: ACCOUNT.LOGIN_UNSUCCESS,
        message: "Input not valid",
      };
    }
    if(role === "user"){
      return userLogin({username, password}).then((obj) => {
        if(obj.status === 200){
          dispatch({
            type: ACCOUNT.LOGIN_SUCCESS,
            message: "Login successful",
            payload: obj.data,
          });
          return {
            type: ACCOUNT.LOGIN_SUCCESS,
            message: "Login successful",
            payload: obj.data,
          };
        }
        else{
          //TODO add obj error message
          dispatch({
            type: ACCOUNT.LOGIN_UNSUCCESS,
            message: "Login failed",
          });
          return {
            type: ACCOUNT.LOGIN_UNSUCCESS,
            message: "Login failed",
          };
        }
      })
      .catch((err) => {
        dispatch({
          type: ACCOUNT.LOGIN_ERROR,
          message: err,
        });
      })
    }
    else if(role === "transporter"){
      return transLogin({username, password}).then((obj) => {
        if(obj.status === 200){
          dispatch({
            type: ACCOUNT.LOGIN_SUCCESS,
            message: "Login successful",
            payload: obj.data,
          });
          return {
            type: ACCOUNT.LOGIN_SUCCESS,
            message: "Login successful",
            payload: obj.data,
          };
        }
        else{
          //TODO add obj error message
          dispatch({
            type: ACCOUNT.LOGIN_UNSUCCESS,
            message: "Login failed",
          });
          return {
            type: ACCOUNT.LOGIN_UNSUCCESS,
            message: "Login failed",
          };
        }
      })
      .catch((err) => {
        dispatch({
          type: ACCOUNT.LOGIN_ERROR,
          message: err,
        });
      })
    }
    else{
      dispatch({
        type: ACCOUNT.LOGIN_ERROR,
        message: "Wrong type",
      });
      return {
        type: ACCOUNT.LOGIN_ERROR,
        message: "Wrong type",
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