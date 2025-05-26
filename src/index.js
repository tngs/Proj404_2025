import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// react-router
import { BrowserRouter } from "react-router-dom";
// redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store, persistor } from "./redux/reducers";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    > */}
      <Provider store={store}>
        <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
          <BrowserRouter>
            <App />
            <ToastContainer position="top-right" autoClose={3000} />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    {/* </motion.div> */}
  </React.StrictMode>
);

reportWebVitals();
