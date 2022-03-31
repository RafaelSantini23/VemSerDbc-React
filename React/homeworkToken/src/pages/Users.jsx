import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import LoadingGif from '../components/loading/LoadingGif';
import Error from '../components/loading/Error';
import moment from 'moment';
import api from '../api';

function Users() {
  const { isLogado } = useContext(AuthContext)
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)
  const [ peoples, setPeoples ] = useState([])
   
    const getPeoples = async () => {
      try {
        const { data } = await api.get('/pessoa')
        setLoading(false)
        setPeoples(data)
      } catch (error) {
        console.log('Houve um erro ao carregar as informações', error);
        setLoading(false)
        setError(true)
      }
    }

    const callAll = () => {
      isLogado()
      getPeoples()

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
          {  peoples.length ? peoples.map(people => (
            <div key={people.idPessoa}>
              <h2> {people.nome} </h2>
              <p> {moment(people.dataNascimento).format('DD/MM/YYYY')} </p>
              <p> {maskCpf(people.cpf)} </p>
              <p> {people.email} </p>
            </div>
          )) : ( <p>Não há informações</p> ) 
          }
      </div>
  )
}

export default Users;
