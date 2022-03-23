import LogoCogu from '../../imgs/cogumelo.jpg'
import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={styles.logoFrase}>
      <img src={LogoCogu} width="100px" alt="Cogumelo do Mario" />
        <p> Melhores alunos do VemSer de todos os tempos </p> 
    </div>
  )
}

export default Logo;

