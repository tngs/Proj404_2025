import { ADMIN } from "./types";
import { persistor } from "../reducers";

export const adminLogin = (administrator) => {
  window.storeToAdmin();
  return (dispatch) => {
    dispatch({
      type: "ADMIN_LOGIN",
      payload: administrator,
    });
    return {
      type: "ADMIN_LOGIN",
      payload: administrator,
    };
  };
};

export const adminLogout = () => {
    persistor.purge();
    window.storeToMain();
};


