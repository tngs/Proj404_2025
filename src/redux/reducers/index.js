import { combineReducers } from "redux";
import account from "./account";
import admin from "./admin";
import token from "./token";
import { adminLogout } from "../actions/admin";

import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,
  migrate: (state) => {
    const { ...rest } = state || {};
    return Promise.resolve(rest);
  },
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  account,
  token,
}));

const persistedReducerWithAdmin = persistReducer(
  persistConfig,
  combineReducers({
    account,
    token,
    admin,
  })
);

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export const storeToAdmin = () => {
  store.replaceReducer(persistedReducerWithAdmin);
};
export const storeToMain = () => {
  store.replaceReducer(persistedReducer);
};
export const storePurge = () => {
  store.dispatch({ type: "ACCOUNT_LOGOUT" });
};


window.storeToAdmin = storeToAdmin;
window.storeToMain = storeToMain;
window.storePurge = storePurge;
window.adminLogout = adminLogout;