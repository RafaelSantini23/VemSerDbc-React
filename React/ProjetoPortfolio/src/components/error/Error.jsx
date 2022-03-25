import React from 'react'
import styles from './Error.module.css'

function Error({error}) {
  return (
    <div className={styles.center}>
      <p className={styles.errorr}>{error}</p>
    </div>
  )
}

export default Error;
