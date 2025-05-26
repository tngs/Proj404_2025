import { ACCOUNT } from "../actions/types";

const DEFAULT_ACCOUNT = {
  loggedIn: false,
  role: "user",
};

//...state, sould be used to fill it with prev state, cuz then when you update only the target
const account = (state = DEFAULT_ACCOUNT, action) => {
  switch (action.type) {
    // SIGNUP
    case ACCOUNT.SIGNUP_START:
      return {
        ...DEFAULT_ACCOUNT,
        message: "Signing up...",
      };
    case ACCOUNT.SIGNUP_SUCCESS:
      return {
        ...DEFAULT_ACCOUNT,
        message: "Account created successfully",
      };
    case ACCOUNT.SIGNUP_UNSUCCESS:
      return {
        ...DEFAULT_ACCOUNT,
        message: "Account creation failed",
      };
    case ACCOUNT.SIGNUP_ERROR:
      return {
        ...DEFAULT_ACCOUNT,
        message: action.message,
      };
    // LOGIN
    case ACCOUNT.LOGIN_START:
      return {
        ...DEFAULT_ACCOUNT,
        message: "Logging in...",
      };
    case ACCOUNT.LOGIN_SUCCESS:
      return {
        //?MIGHT BE WRONG
        ...DEFAULT_ACCOUNT,
        loggedIn: true,
        message: "Login successful",
        ...action.payload,
      };
    case ACCOUNT.LOGIN_UNSUCCESS:
      return {
        ...DEFAULT_ACCOUNT,
        message: "Login failed",
      };
    case ACCOUNT.LOGIN_ERROR:
      return {
        ...DEFAULT_ACCOUNT,
        message: action.message,
      };
    //* LOGOUT
    case ACCOUNT.LOGOUT:
      return {
        ...DEFAULT_ACCOUNT,
        message: "Logged out",
      };
    default:
      return state;
  }
};

export default account;
