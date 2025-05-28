import { TOKEN } from "./types";
import { persistor } from "../reducers";

export const tokenSave = (token) => {
  return (dispatch) => {
    const action = {
        type: TOKEN.SAVE,
        payload: token,
      }
    dispatch(action);
    localStorage.setItem("token", token);
    return action;
  };
};

export const tokenDelete = () => {
  return (dispatch) => {
    const action = {
        type: TOKEN.DELETE,
      }
    dispatch(action);
    localStorage.removeItem("token");
    return action;
  };
};


