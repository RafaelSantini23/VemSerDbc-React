import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Repositorios.module.css'
import {Link} from 'react-router-dom'

function Repositorios() {
  const URL = 'https://api.github.com/users/RafaelSantini23/repos';

  const [projects, setProjects] = useState([]);

  async function getRepos() {
    try {
      const { data } = await axios.get(URL)
      setProjects(data)
    } catch (error) {
      console.log('Ocorreu um erro ao buscar as informações', error);
    }
  }

  useEffect(() => {
    getRepos();
  })
  return (
    <div>
     {
      projects.length ? projects.map(project => (
         <div className={styles.gitRepositories} key={project.id}>
          <h2>{project.name}</h2>
          <p>Link do projeto <a href={project.html_url} target="_blank"> {project.html_url} </a> </p>
          <p> {project.description} </p>
          <p>Linguagem Utilizada: {project.language}</p>
         </div>
       )) : <p> Não há informações aqui</p> 
     }
    </div>
  )
}

export default Repositorios;
