import styles from './Form.module.css'
import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [opcoes, setOpcoes] = useState('');
  const [message, setMessage] = useState('React');

  function registerUser(e) {
    e.preventDefault()
    // console.log(name, email, opcoes, message);
    if (!name || !opcoes || !email || !message) {
      alert('Por favor preencha os campos')
    } else {
      alert(`Mensagem enviada com sucesso ${name}`)
    }
  }



  return (
    <section className={styles.containerForm}>
      <form onSubmit={registerUser}>
        <div>

          <div>
            <label htmlFor="name">Digite seu nome completo
              <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
          </div>
          <div>
            <label htmlFor="email">Digite seu email:
              <input type="email" placeholder="digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          <div>
            <label htmlFor="options">Qual o motivo do contato:
              <select value={opcoes} onChange={e => setOpcoes(e.target.value)}>
                <option value=""></option>
                <option value="React"> React é bom de mais</option>
                <option value="Vue"> Vue é bom de mais</option>
                <option value="next"> next é bom de mais</option>
                <option value="angular"> angular é bom de mais</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="message">Sua Mensagem
              <textarea type="message" placeholder="digite seu email" value={message} onChange={(e) => setMessage(e.target.value)} cols="30" rows="10" placeholder="Digite sua biografia" />
            </label>
          </div>
          <div>
            <input type="submit" value="Cadastrar" />
          </div>
        </div>

      </form>
    </section>
  )
}

export default Form;
