import React, { useContext } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styles from './Header.module.css'


export default function Menu() {
  const { handleLogout } = useContext(AuthContext);
  
  const token = localStorage.getItem('token')

  return (
    <div className={styles.menu}>
      <Logo />
        { token ? 
           <ul>
            <li>  <Link to='/users'> Users </Link> </li>
            <li>  <Link to='/'> Home </Link> </li>
            <li>  <Link to='/address'> Address </Link>   </li>
            <button onClick={handleLogout}>Deslogar</button>
          </ul>
         : <ul> <li>  <Link to='/login'> login </Link> </li> </ul>}
    </div>
  )
}
