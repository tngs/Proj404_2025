import { combineReducers } from "redux";
import account from "./account";

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
}));

const persistedReducerWithTest = persistReducer(
  persistConfig,
  combineReducers({
    account,
    test: (state = null, action) => {
      return state;
    },
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

export const storeToTester = () => {
  store.replaceReducer(persistedReducerWithTest);
};
export const storeToMain = () => {
  store.replaceReducer(persistedReducer);
};
export const storePurge = () => {
  store.dispatch({ type: "ACCOUNT_LOGOUT" });
};

window.storeToTester = storeToTester;
window.storeToMain = storeToMain;
window.storePurge = storePurge;