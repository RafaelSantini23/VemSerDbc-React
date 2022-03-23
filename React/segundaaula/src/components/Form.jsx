import React, {useState} from 'react';

function Form() {

  function CadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Seu login e senha é ${login}, ${senha}`);
  }
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('');
  return (
    <>
      <h1>Meu Formulário</h1>
      <form onSubmit={CadastrarUsuario}>
         <div>
           <input type="text" placeholder="Digite seu login" value={login} onChange={(e) => setLogin(e.target.value)}  />
         </div>
         <div>
           <input type="password" placeholder="digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
         </div>
         <div>
           <input type="submit" value="Cadastrar" />
         </div>
      </form>
    </>
  )
}

export default Form;