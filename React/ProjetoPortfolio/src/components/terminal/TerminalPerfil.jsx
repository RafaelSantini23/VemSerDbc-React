import styles from './Terminal.module.css'
import Eclipse from '../eclipse/Eclipse';
import Error from '../error/Error';

function TerminalPerfil({data}) {

  const { bio, company, location, login, avatar_url } = data
  
  const isEmpty = Object.keys(data).length

  return (
    <div className={styles.containerTerminal}>
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
              {bio}
            </p>
            <div className={styles.locationGit}>
              <p> Empresa: {company} | </p>
              <p> Local: {location} | </p>
              <p> Github: {login}  </p>
            </div>
          </div>
          <figure>
            <img className={styles.imgGit} src={avatar_url} alt="imagem de perfil" />
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
