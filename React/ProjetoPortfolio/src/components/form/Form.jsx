import styles from './Form.module.css'
import InputForm from '../input/InputForm'
import TextArea from '../textArea/TextArea';
import { useState } from 'react';
 
function Form() {
  const [name, setName] = useState()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendForm(e) {
    e.preventDefault()

    if(name,email,message) {
      alert(`Mensagem enviada ${name}`)
    } else {
      alert('Preencha os campos!')
    }
  }

  return (
    <div className={styles.containerForm}>
      <p>
        Formulário para contato:
      </p>
    <form onSubmit={sendForm}>
     <InputForm text="Nome completo:" typeInpt="text" placeholder='Digite seu nome' onChange={(e) => setName(e.target.value)} />
     <InputForm text="Digite seu email:" typeInpt="email" placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} />
     <TextArea cols={50} rows={5} placeholder="Informe o assunto" onChange={(e) => setMessage(e.target.value)}/>
     <InputForm typeInpt="submit" onSubmit={sendForm}  />
    </form>
    </div>
  )
}

export default Form;
