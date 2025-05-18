import { AUTH } from "../actions/types";
import fetchStates from "../fetchStates";

const DEFAULT_AUTH = {
    token: null,
    status: fetchStates.null,
};

const auth = (state = DEFAULT_AUTH, action) => {
    switch (action.type) {
        case AUTH.LOGING_IN:
            return {
                token: null,
                status: fetchStates.fetching,
                message: "AUTH: LOGING_IN",
            };
        case AUTH.LOGIN_ERROR:
            return {
                token: null,
                status: fetchStates.error,
                message: "AUTH: LOGIN_ERROR",
            }
        case AUTH.LOGIN_SUCCESS:
            return {
                token: action.payload,
                status: fetchStates.success,
                message: "AUTH: LOGIN_SUCCESS",
            }
        case AUTH.LOGIN_UNSUCCESS:
            return {
                token: null,
                status: fetchStates.unsuccess,
                message: "AUTH: LOGIN_UNSUCCESS",
            }
        default:
            return {
                ...state,
                message: "AUTH: default!!!",
            };
    }
}

export default auth;