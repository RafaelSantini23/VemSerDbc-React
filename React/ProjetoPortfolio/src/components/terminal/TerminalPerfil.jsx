import React, { useLayoutEffect } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import styles from './Terminal.module.css'
import Eclipse from '../eclipse/Eclipse';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

function TerminalPerfil() {
  const URL = 'https://api.github.com/users/RafaelSantini23';
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(true)
  
  async function getInformations() {
    try {
      const { data } = await axios.get(URL)
      setUser({ name: data.login, bio: data.bio, img: data.avatar_url, company: data.company, location: data.location })
      setLoad(false)
    } catch (error) {
      console.log('Ocorreu um erro ao carregar os dados!!', error);
    }
  }
  useEffect(() => {
    getInformations()
    return () => {
      setUser({})
    }
  }, [])

  const isEmpty = Object.keys(user).length



  return (
    <div className={styles.containerTerminal}>
      {load && <Spinner  /> }
    {
      isEmpty ? (
      <div className={styles.container}>
        <Eclipse />
        <div className={styles.containerPerfil}>
          <div className={styles.containerTexto}>
            <p>
              Oi, meu nome é Rafael Santini, e trabalho como desenvolvedor WEB.
            </p>
            <p className={styles.biografia}>
              {user.bio}
            </p>
            <div className={styles.locationGit}>
              <p> Empresa: {user.company} | </p>
              <p> Local: {user.location} | </p>
              <p> Github: {user.name}  </p>
            </div>
          </div>
          <figure>
            <img className={styles.imgGit} src={user.img} alt="imagem de perfil" />
          </figure>
        </div>
        <div>
        </div>
      </div>
      ) : ( <Error error="Erro ao carregar as informações" />  )}
    </div>
  )
}

export default TerminalPerfil;
