import styles from './TextArea.module.css'

function TextArea({cols,rows, placeholder, onChange}) {
  return (
    <label htmlFor="">
      Digite um assunto:
   <textarea placeholder="Informe o assunto" cols={cols} rows={rows} onChange={onChange}></textarea>
    </label>
  )
}
export default TextArea;
