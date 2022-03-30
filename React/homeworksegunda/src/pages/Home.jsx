import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Home() {
  const { isLogado } = useContext(AuthContext)

  useEffect(() => {
      isLogado()
  })
  return (
    <div>Home</div>
  )
}
