import React from "react";
import styles from "./NavButton.module.css";

export default function NavButton(props) {
  return (
    <button className={styles.button} {...props}>{props.children ? props.children : "Button"}</button>
  );
}
