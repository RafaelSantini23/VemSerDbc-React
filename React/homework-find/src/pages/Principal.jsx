import {useContext} from 'react';
import Input from '../components/inputs/Input';
import ListEmployes from '../components/ListEmployes/ListEmployes';
import { FormContext } from '../context/FormContext';
import styles from './Principal.module.css';

function Principal() {
    const { name, setName, email, setEmail, profissao, setProfissao, validateForm, list} = useContext(FormContext)
    

    return (
        <div >

        <form onSubmit={validateForm} className={styles.formRegister}>
        <h1>Registre-se</h1>
           <Input text={'Digite o nome:'} typeinpt="text"  value={name} placeholder={'Digite seu nome'} onChange={(e) => setName(e.target.value)}   />
           <Input text={'Digite o email:'} typeinpt="text"  value={email} placeholder={'Digite seu email'} onChange={(e) => setEmail(e.target.value)}   />
           <Input text={'Digite a profissão: '} typeinpt="text" value={profissao}  placeholder={'Digite sua profissão'} onChange={(e) => setProfissao(e.target.value)} />
           <Input typeinpt="submit" value='Cadastrar' />
        </form>
        
        <div>
            
        <ListEmployes /> 
            </div>
    </div>
  )
}

export default Principal;