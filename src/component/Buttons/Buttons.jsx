import React from "react";
import styles from "./Buttons.module.css";

export function Buttons({ text, auth }) {
  return <button className={auth ? styles.auth : ''}> {text} </button>;
}
