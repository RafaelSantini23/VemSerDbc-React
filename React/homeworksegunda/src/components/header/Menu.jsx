import React, { useContext } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


export default function Menu() {
  const { handleLogout } = useContext(AuthContext);
  const token = localStorage.getItem('token')
  return (
    <div>
        <Logo />
        { token ? 
        <div>
            <li>  <Link to='/users'> Users </Link> </li>
            <li>  <Link to='/'> Home </Link> </li>
            <button onClick={handleLogout}>Deslogar</button>
        </div>
         : <li>  <Link to='/login'> login </Link> </li> }
    </div>
  )
}
