import Item from '../Menu/Items/Item';
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer>
      <div className={styles.navFooter}>
        <nav>
         <ul>
          <Item url="/home" name="Home" />
          <Item url="/sobre" name="Sobre" />
          <Item url="/contato" name="Contato" />
          </ul>
        </nav>
        <address> <strong> Tv. São José, 455 - Navegantes, Porto Alegre - RS, 90240-200 </strong> </address>
      </div>
    </footer>
  )
}

export default Footer;