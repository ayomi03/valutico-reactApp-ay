import React from "react";
import styles from "./Heading.module.css";

function Heading({heading, para, dark}) {
  return (
    <div className={styles.heading}>
      <h2 className={dark ? styles.dark : ''}>{heading}</h2>
      <p className={dark ? styles.dark : ''}> {para} </p>
    </div>
  );
}

export default Heading;
