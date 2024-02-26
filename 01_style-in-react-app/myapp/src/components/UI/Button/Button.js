import React from "react";

// To use css modules add css file in this way.
// In this way the styles are pass in the file as an object, and the classes defined in the css file is act as property name.
import styles from './Button.module.css'

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
