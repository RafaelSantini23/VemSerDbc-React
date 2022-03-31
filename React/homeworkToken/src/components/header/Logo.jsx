import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../imgs/logo.png'



export default function Logo() {
  return (
    <>
    <Link to='/'> <img src={logo} width='60px' alt="imagem do logo" /> </Link>
    
    </>
  )
}
