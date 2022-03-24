import styles from './Header.module.css'
import {Link} from 'react-router-dom'
import Logo from '../../imgs/Logo.png'

function Header() {
  return (
    <header>
      <nav>
          <Link to='/'> <img width="50px" src={Logo} /> </Link> 
        <ul>
          <li>  <Link to='/'> Perfil </Link> </li>
          <li>  <Link to='/projetos'> Projetos </Link> </li>
          <li>  <Link to='/contato'> Contato </Link> </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
