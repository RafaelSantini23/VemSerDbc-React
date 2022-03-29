import styles from './Repositorios.module.css'
import "aos/dist/aos.css";

function Repositorios({data}) {
  
  const { id, name, html_url, description, language } = data;

  return (
    <div>
     {
      data.length ? data.map(data => (
         <div className={styles.gitRepositories} key={data.id} data-aos="fade-up">
          <h2>{data.name}</h2>
          <p>Link do projeto <a href={data.html_url} target="_blank"> {data.html_url} </a> </p>
          <p> {data.description} </p>
          <p>Linguagem Utilizada: {data.language}</p>
         </div>
       )) : <p> Não há informações aqui</p> 
     }
    </div>
  )
}

export default Repositorios;
