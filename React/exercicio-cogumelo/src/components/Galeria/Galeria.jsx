import styles from './Galeria.module.css'
import ElementosGaleria from './ElementosGaleria/ElementosGaleria';
import ImageGaleria from '../../imgs/cogumelo.jpg'

const Galeria = () => {
  return (
 
      <div className={styles.imgsCogs}>
        
      <ElementosGaleria url={ImageGaleria} titulo="Cogumelo 1" />
      <ElementosGaleria url={ImageGaleria} titulo="Cogumelo 2" />
      <ElementosGaleria url={ImageGaleria} titulo="Cogumelo 2" />

      </div>
     
  )
}

export default Galeria;