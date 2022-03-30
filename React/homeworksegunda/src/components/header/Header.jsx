import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Menu from './Menu';

export default function Header() {
  const { isLogado } = useContext(AuthContext);

  useEffect(() => {
    isLogado();
  },[])
  
  return (
    <div>
        <Menu />
    </div>
  )
}


