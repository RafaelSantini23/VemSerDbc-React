import React from 'react'
import Repositorios from '../../components/repositorios/Repositorios';
import styles from './Projetos.module.css'
import { useState,useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Spinner from '../../components/spinner/Spinner';
import axios from 'axios';

function Projetos() {
  const URL = 'https://api.github.com/users/RafaelSantini23/repos';

  const [projects, setProjects] = useState([]);
  const [load, setLoad] = useState(true)

  async function getRepos() {
    try {
      const { data } = await axios.get(URL)
      setLoad(false)
      setProjects(data)
    } catch (error) {
      console.log('Ocorreu um erro ao buscar as informações', error);
    }
  }

  useEffect(() => {
    Aos.init({duration: 2000})
    getRepos()
  })



  return (
    <div className={styles.container}>
      {load && <Spinner />}
      <Repositorios data={projects}/>
      
    </div>
  )
}

export default Projetos;
