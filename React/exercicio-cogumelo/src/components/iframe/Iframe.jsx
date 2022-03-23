import styles from './Iframe-module.css';

const Iframe = ({url, largura, altura}) => {
  return (
    <>
      <h2>Sobre a DBC</h2>
      <iframe width={largura} height={altura} src={url} 
       className={styles.iframe} ></iframe>
    </>
    
  )
}

export default Iframe;