import { useContext } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Logo from '../Logo';
import { ItemMenu,
      ButtonHeader,
      Navbar,
            
} from './Menu.styles';



function Menu() {
  const { handleLogout } = useContext<any>(AuthContext);

  const navigate = useNavigate()

  const token = localStorage.getItem('token');

  return (
        <Navbar>
          <ul>
            <Logo />
            <Link to={'/'}> <ItemMenu> Home </ItemMenu> </Link>
            <Link to={'/users'}><ItemMenu> Users </ItemMenu> </Link> 
            <Link to={'/address'}><ItemMenu>  Address </ItemMenu> </Link>
            <ButtonHeader onClick={() => handleLogout()}>Logout</ButtonHeader> 
          </ul>
          </Navbar>
  )
}

export default Menu