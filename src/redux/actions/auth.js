import axios from "../../axios-mnb";
import { AUTH } from "./actionTypes";
import { store, persistor } from "../../index";

export const authStart = () => {
  return (dispatch) => {
    dispatch({
      type: AUTH.AUTH_START,
    });
  };
};

export const authSuccess = (/*token, username, role, id*/) => {
  return (dispatch) => {
    dispatch({
      type: AUTH.AUTH_SUCCESS,
      //   token: token,
      //   role: role,
      //   id: id,
      //   username: username,
    });
  };
};

export const authFail = (error) => {
  return (dispatch) => {
    dispatch({
      type: AUTH.AUTH_FAIL,
      error: error,
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    persistor.purge();
    dispatch({
      type: AUTH.AUTH_LOGOUT,
    });
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (username, password, role, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      username: username,
      password: password,
    };
    let url = "/account/signup";
    if (!isSignup) {
      url = "/account/login";
    }
    axios
      .post(url, authData)
      .then((response) => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("id", response.data.localId);
        // alert(response.data?.role);
        dispatch(
          authSuccess(
            response.data.idToken,
            response.data.username,
            response.data.role,
            response.data.localId
          )
        );
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((err) => {
        let { response } = err;
        dispatch(authFail(response));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: AUTH.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const email = localStorage.getItem("email");
        const role = localStorage.getItem("role");
        const id = localStorage.getItem("id");
        dispatch(authSuccess(token, email, role, id));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
