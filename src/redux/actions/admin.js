import { ADMIN, ACCOUNT } from "./types";
import { persistor } from "../reducers";

export const adminLogin = (administrator) => {
  return (dispatch) => {
    const action = {
      type: ADMIN.LOGIN,
      payload: administrator,
    }
    dispatch(action);
    return action;
  };
};

export const adminLogout = () => {
    persistor.purge();
    window.storeToMain();
};


