import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../imgs/dbc.png'
import { LogoHeader } from './Logo.styles';


function Logo() {


  return (
    <div>
      <LogoHeader>
        <img src={LogoImg} width={'48px'} alt="Imagem Logo" />
        <Link to={'/'}> Digital Business Company </Link>
      </LogoHeader>
        
    </div>
  )
}

export default Logo;