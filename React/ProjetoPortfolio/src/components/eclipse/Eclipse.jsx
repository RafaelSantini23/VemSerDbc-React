import styles from './Eclipse.module.css'

function Eclipse() {
  return (
    <div className={styles.eclipses}>
    <div className={styles.eclipseDanger}>
    </div>
    <div className={styles.eclipseYellow}>
    </div>
    <div className={styles.eclipseGreen}>
    </div>
    </div>
  )
}

// styles[`eclipse${color}`]
export default Eclipse;
