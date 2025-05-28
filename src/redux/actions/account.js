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
import { tokenSave, tokenDelete } from "./token";

export const signup = ({ username, password, email, address, role }) => {
  return (dispatch) => {
    dispatch({ type: ACCOUNT.SIGNUP_START});
    if (role === "user") {
      return userSignup({ username, password, email, address })
        .then((obj) => {
          if (obj.status === 201) {
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
          if (obj.status === 201) {
            dispatch({
              type: ACCOUNT.SIGNUP_SUCCESS,
              payload: {...obj.data, role: role},
              message: "User created successfully",
            });
            return {
              type: ACCOUNT.SIGNUP_SUCCESS,
              payload: {...obj.data, role: role},
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

export const login = ({ email, password, role }) => {
  return (dispatch) => {
    dispatch({ type: ACCOUNT.LOGIN_START });
    if (!email || !password || !role) {
      const error = {
        type: ACCOUNT.LOGIN_UNSUCCESS,
        message: "Input not valid",
      };
      dispatch(error);
      return Promise.resolve(error);
    }
    if(role === "user"){
      return userLogin({email, password}).then((obj) => {
        if(obj.status === 200){
          dispatch({
            type: ACCOUNT.LOGIN_SUCCESS,
            message: "Login successful",
            payload: obj.data,
          });
          // dispatch(tokenSave(obj.data.token));
          return {
            type: ACCOUNT.LOGIN_SUCCESS,
            message: "Login successful",
            payload: obj.data,
          };
        }
        else{
          const unsuccess = {
            type: ACCOUNT.LOGIN_UNSUCCESS,
            message: "Login failed",
          }
          dispatch(unsuccess);
          return unsuccess;
        }
      })
      .catch((err) => {
        const error = {
          type: ACCOUNT.LOGIN_ERROR,
          message: err,
        }
        dispatch(error);
        return error;
      })
    }
    else if(role === "transporter"){
      return transLogin({email, password}).then((obj) => {
        console.log("transLogin", obj);
        if(obj.status === 200){
          dispatch({
            type: ACCOUNT.LOGIN_SUCCESS,
            message: "Login successful",
            payload: {...obj.data, role: role},
          });
          // dispatch(tokenSave(obj.data.token));
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
      const wrongType = {
        type: ACCOUNT.LOGIN_ERROR,
        message: "Wrong type",
      };
      dispatch(wrongType);
      return Promise.resolve(wrongType);
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: ACCOUNT.LOGOUT,
      message: "Logged out",
    });
    dispatch(tokenDelete());
    persistor.purge(); // Clear persisted state
    return {
      type: ACCOUNT.LOGOUT,
      message: "Logged out",
    };
  };
};