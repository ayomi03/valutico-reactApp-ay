import React from 'react'
import styles from './PartnerImages.module.css'

function PartnerImages({imgSrc}) {
  return (
    <div className={styles.imgCtn}>
        <img src={imgSrc} alt="Partners logo" />
    </div>
  )
}

export default PartnerImages