import React from "react";
import styles from "./NavButton.module.css";

export default function NavButton(props) {
  // const clickHandler  = props?.onClick;
  // const text = props?.children;
  // console.log('props', props)
  // // const {color, colorOnHover} = props;
  return (
    <button className={styles.button} {...props}>{props.children ? props.children : "Button"}</button>
  );
}
