import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Repositorios.module.css'
import Spinner from '../spinner/Spinner';
import Aos from "aos";
import "aos/dist/aos.css";

function Repositorios() {
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
    getRepos();
    
  })
  
  return (
    <div>
      {load && <Spinner />}
     {
      projects.length ? projects.map(project => (
         <div className={styles.gitRepositories} key={project.id} data-aos="fade-up">
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
