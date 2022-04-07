import { useContext } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Logo from '../Logo';
import { ItemMenu,
      ButtonHeader        
} from './Menu.styles';



function Menu() {
  const { handleLogout } = useContext<any>(AuthContext);

  const navigate = useNavigate()

  const token = localStorage.getItem('token');

  return (
    <div>
        {token ? 
          <ul>
            <Logo />
            <Link to={'/'}> <ItemMenu> Home </ItemMenu> </Link>
            <Link to={'/users'}><ItemMenu> Users </ItemMenu> </Link> 
            <Link to={'/address'}><ItemMenu>  Address </ItemMenu> </Link>
            <ButtonHeader onClick={() => handleLogout()}>Logout</ButtonHeader> 
          </ul>
          :
          <>
          <Logo />
          <ItemMenu>  <Link to={'/Login'}>Login</Link> </ItemMenu>  
          </>
        }
    </div>
  )
}

export default Menu