import { ACCOUNT } from "../actions/types";
import fetchStates from "../fetchStates";

const DEFAULT_ACCOUNT = {
  loggedIn: false,
  user: { role: "user" },
};

//...state, sould be used to fill it with prev state, cuz then when you update only the target
const account = (state = DEFAULT_ACCOUNT, action) => {
  switch (action.type) {
    // SIGNUP
    case ACCOUNT.SIGNING_UP:
      console.log(ACCOUNT.SIGNING_UP, {
        ...DEFAULT_ACCOUNT,
        status: action.status,
      });
      return {
        ...DEFAULT_ACCOUNT,
        status: action.status,
      };
    case ACCOUNT.SIGNUP_UNSUCCESS:
      console.log(ACCOUNT.SIGNUP_UNSUCCESS, {
        ...DEFAULT_ACCOUNT,
        status: action.status,
        message: action.message,
      });
      return {
        ...DEFAULT_ACCOUNT,
        status: action.status,
        message: action.message,
      };
    case ACCOUNT.SIGNUP_SUCCESS:
      console.log(ACCOUNT.SIGNUP_SUCCESS, {
        ...DEFAULT_ACCOUNT,
        status: action.status,
        message: action.message,
      });
      return {
        ...DEFAULT_ACCOUNT,
        status: action.status,
        message: action.message,
        createdUser: action.payload,
      };
    // LOGIN
    case ACCOUNT.LOGING_IN:
      console.log(ACCOUNT.LOGING_IN, {
        ...DEFAULT_ACCOUNT,
        status: action.status,
      });
      return {
        ...DEFAULT_ACCOUNT,
        status: action.status,
      };
    case ACCOUNT.LOGIN_ERROR:
      console.log(ACCOUNT.LOGIN_ERROR, {
        ...DEFAULT_ACCOUNT,
        status: action.status,
        message: action.message,
      });
      return {
        ...DEFAULT_ACCOUNT,
        message: action.message,
      };
    case ACCOUNT.LOGIN_SUCCESS:
      console.log(ACCOUNT.LOGIN_SUCCESS, {
        loggedIn: true,
        status: action.status,
        message: action.message,
        user: action.payload,
      });
      return {
        loggedIn: true,
        status: action.status,
        message: action.message,
        user: action.payload,
      };
    case ACCOUNT.LOGIN_UNSUCCESS:
      console.log(ACCOUNT.LOGIN_UNSUCCESS, {
        ...DEFAULT_ACCOUNT,
        status: action.status,
        message: action.message,
      });
      return {
        ...DEFAULT_ACCOUNT,
        status: action.status,
        message: action.message,
      };
    // LOAD
    case ACCOUNT.LOADING:
      console.log(ACCOUNT.LOADING, {
        ...DEFAULT_ACCOUNT,
        status: action.status,
        message: action.message,
      });
      return {
        ...DEFAULT_ACCOUNT,
        status: action.status,
        message: action.message,
      };
    case ACCOUNT.LOADED:
      console.log(ACCOUNT.LOADED, {
        loggedIn: action.payload.loggedIn,
        status: action.status,
        message: action.message,
        user: action.payload.user,
      });
      return {
        loggedIn: action.payload.loggedIn,
        status: action.status,
        message: action.message,
        user: action.payload.user,
      };
    //LOGOUT
    case ACCOUNT.LOGOUT:
      console.log(ACCOUNT.LOGOUT, { message: action.message });
      return {
        ...DEFAULT_ACCOUNT,
        message: action.message,
      };
    //UPDATE
    case ACCOUNT.UPDATE:
      console.log(ACCOUNT.UPDATE, {
        loggedIn: true,
        message: action.message,
        user: {
          ...state?.user, // all existing user data
          ...action.payload, // overwrite or add fields from payload
        },
      });
      return {
        loggedIn: true,
        message: action.message,
        user: { ...state?.user, ...action.payload },
      };
    default:
      console.log("ACCOUNT_DEFAULT->'action.type'", action.type);
      return state;
  }
};

export default account;
