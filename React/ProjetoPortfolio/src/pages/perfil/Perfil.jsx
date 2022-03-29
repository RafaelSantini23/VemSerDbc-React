import React from 'react';
import TerminalPerfil from '../../components/terminal/TerminalPerfil';
import { useState, useEffect } from 'react';
import Spinner from '../../components/spinner/Spinner';
import axios from 'axios';


function Perfil(){
  const URL = 'https://api.github.com/users/RafaelSantini23';
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(true);

  async function getInformations() {
    try {
      const { data } = await axios.get(URL);
      setUser(data);
      setLoad(false);
    } catch (error) {
      console.log('Ocorreu um erro ao carregar os dados!!', error);
    }
  }
  useEffect(() => {
    getInformations()
    return () => {
      setUser({});
    }
  }, [])

  return (
    <>
      {load && <Spinner  /> }
      <TerminalPerfil data={user}/>
    </>
  )
}



export default Perfil;
