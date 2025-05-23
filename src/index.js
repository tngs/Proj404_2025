import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// react-router
import { BrowserRouter } from "react-router-dom";
// redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage
import { PersistGate } from "redux-persist/integration/react";
import { storeUnauthenticated, storeAuthenticated } from "./redux/reducers"; // Ensure you have a rootReducer defined
import { combineReducers } from "redux";
import testReducer from "./redux/reducers/test";
import { motion } from "framer-motion";
import { login } from "./redux/actions/account";

const persistConfig = {
  key: "root",
  storage,
  migrate: (state) => {
    const { test, ...rest } = state || {};
    return Promise.resolve(rest);
  },
};

const persistedReducerUnauthed = persistReducer(
  persistConfig,
  storeUnauthenticated
);
const persistedReducerAuthed = persistReducer(
  persistConfig,
  storeAuthenticated
);

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

export const store = createStore(
  persistedReducerUnauthed,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

const storeToAuthed = () => {
  store.replaceReducer(persistedReducerAuthed);
};
const storeToUnauthed = () => {
  store.replaceReducer(persistedReducerUnauthed);
};
const storePurge = () => {
  persistor.purge();
};
const loginAsAdmin = () => {
  store.dispatch(
    login({
      username: "admin",
      password: "admin",
      role: "admin",
    })
  );
};

window.storeToAuthed = storeToAuthed;
window.storeToUnauthed = storeToUnauthed;
window.storePurge = storePurge;
window.loginAsAdmin = loginAsAdmin;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Provider store={store}>
        <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </motion.div>
  </React.StrictMode>
);

reportWebVitals();
