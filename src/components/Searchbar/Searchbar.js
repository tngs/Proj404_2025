import React from "react";
import styles from "./Searchbar.module.css";

const Searchbar = (props) => {
  return <input {...props} className={styles.input} placeholder="text" />;
};

export default Searchbar;
