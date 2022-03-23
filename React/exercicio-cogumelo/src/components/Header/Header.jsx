import styles from './Header.module.css'
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';



function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Logo />
        </div>
        <Menu />
      
    </div>
    </header>
  )
}

export default Header;