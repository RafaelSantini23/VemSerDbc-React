import styles from './Spinner.module.css'


function Spinner({load}) {
  return (
    <div className={styles.center}>

    <div  className={styles.spinner}>
    </div>
    </div>
  )
}

export default Spinner;
