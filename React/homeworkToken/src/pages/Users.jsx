import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import LoadingGif from '../components/loading/LoadingGif';
import moment from 'moment';
import { UserContext } from '../context/UserContext';
import Error from '../components/loading/Error';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import styles from './Users.module.css';


function Users() {
  const navigate = useNavigate();
  const { isLogado } = useContext(AuthContext)
  const { getPeoples, peoples, loading, error } = useContext(UserContext)

    const callAll = () => {
      isLogado()
      getPeoples()
    }

    async function handleDelete(id) {
      confirmAlert({
        title: 'Deletar',
        message: 'Deseja realmente deletar.',
        buttons: [
          {
            label: 'Yes',
            onClick: async () => { try {
              const { data } = await api.delete(`/pessoa/${id}`)
              console.log(data);
              alert('Deletado com sucesso!');
              getPeoples()
            } catch(error) {
              console.log(error);
              }
            } 
          },
          {
            label: 'No',
            onClick: () => alert('Então ta safe')
          }
        ]
      });
    }




  const maskCpf = cpf => cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    
    
  useEffect(() => {
    callAll()
  }, [])

  if(loading) {
    return ( <LoadingGif /> )
  }

  if(error) {
    return ( <Error /> )
  }
  
  return (
      <div>
          <h1>Users</h1>
          <Link to='/create-user'> Cadastrar Usuário </Link>
          {  peoples.length ? peoples.map(people => (
            <div key={people.idPessoa} className={styles.userList}>
              <h2> {people.nome} </h2>
              <p> {moment(people.dataNascimento).format('DD/MM/YYYY')} </p>
              <p> {maskCpf(people.cpf)} </p>
              <p> {people.email} </p>
              <button  onClick={() => handleDelete(people.idPessoa)}> Deletar</button>
              <button onClick={() => navigate(`/create-user/${people.idPessoa}`)}>Atualizar</button>
            </div>
          )) : ( <p>Não há informações</p> ) 
          }
      </div>
  )
}

export default Users;
