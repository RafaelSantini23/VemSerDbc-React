import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'


function Menu() {
  const { handleLogout } = useContext<any>(AuthContext);
  const token = localStorage.getItem('token');

  return (
    <div>
        {token ? 
            <ul>
            <Link to={'/'}>Home</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/address'}>Address</Link>
            <button onClick={() => handleLogout()}>Logout</button>
          </ul>
          :
          <Link to={'/Login'}>Login</Link>
            }
        
    </div>
  )
}

export default Menu