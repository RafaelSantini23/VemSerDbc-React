import styles from './ElementosGaleria.module.css'

const ElementosGaleria = ({url, titulo }) => {
  return (
   
      <div className={styles.imgsCogsChild}>
        <img src={url} alt="Cogumelo do Mario" width="150px"/>
        <p> {titulo} </p>
      </div>
      
    
  )
}

export default ElementosGaleria;