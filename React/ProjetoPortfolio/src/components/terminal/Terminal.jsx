import React, { useLayoutEffect } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import styles from './Terminal.module.css'
import Eclipse from '../eclipse/Eclipse';

  function Terminal() {
    const URL = 'https://api.github.com/users/RafaelSantini23';
    const [user, setUser] = useState({});
    async function getInformations() {
      try {
        const { data } = await axios.get(URL)

        setUser({ name: data.login, bio: data.bio, img: data.avatar_url, company: data.company, location:data.location })
        

      } catch (error) {
        console.log('Ocorreu um erro ao carregar os dados!!', error);
      }
    }
    useLayoutEffect(() => {
       getInformations()
    }, [])
    // useEffect(() => {
    //   getInformations()
    // }, [])


    return (
      <div className={styles.containerTerminal}>
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
      </div>
    )
  }

  export default Terminal;
