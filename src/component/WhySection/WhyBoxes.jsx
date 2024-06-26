import React from 'react'
import styles from './Why.module.css'

function WhyBoxes({heading, para}) {
  return (
    <div className={styles.box}>
        <h3> {heading}</h3>
        <p>{para}</p>
    </div>
  )
}

export default WhyBoxes