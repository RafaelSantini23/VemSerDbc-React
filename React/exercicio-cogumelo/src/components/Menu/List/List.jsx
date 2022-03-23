import styles from './List.module.css'
import Item from '../Items/Item'

function List() {
  return (
    <ul className={styles.headerMenu}>
      <Item name="Home" url="/home" />
      <Item name="Sobre" url="/sobre" />
      <Item name="Contato" url="/contato" />
    </ul>
  )
}

export default List;
