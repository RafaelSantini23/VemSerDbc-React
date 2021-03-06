import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Formik, Form, Field } from 'formik';
import styles from './Address.module.css'
import axios from 'axios';

export default function Address() {
  const { isLogado } = useContext(AuthContext);
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone, setTelefone] = useState('');

  
  
  
  const searchInputs = async () => {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
      
      setRua(data.logradouro);
      setComplemento(data.complemento);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setEstado(data.uf);
      setTelefone(data.ddd);
      
      
    } catch (error) {
      console.log('Ocorreu um erro ao carregar as informações', error);
    }
  }
  
  const handleInputs = async () => {
    
    const validateInputs = rua && complemento && bairro && cidade && estado && telefone.length > 4;
    
    const objectCep = {
      cep: cep,
      logradouro: rua,
      complemento: complemento,
      bairro: bairro,
      uf: estado,
      ddd: telefone
    }
    
    
    
    if (validateInputs) {
      alert(JSON.stringify(objectCep,null,2));
      console.log('AQUIII');
      setCep('');
      setRua('');
      setComplemento('');
      setCidade('');
      setBairro('');
      setEstado('');
      setTelefone('');
      
    }
    else {
      alert('Digite os campos que faltam!');
    }
  }


  
  
  useEffect(() => {
    isLogado();
  },[])

  
  
  const maskCEP = value => {
    return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
  };
  
  const maskPhone = value => {
    return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
  };
  
  
  return (
    <div >
      <Formik
        initialValues={{
          cep: '',
          rua: '',
          complemento: '',
          bairro: '',
          cidade: '',
          estado: '',
          telefone: '',
        }}
        onSubmit={handleInputs}
      >
        <Form className={styles.containerAddress}>
          <label htmlFor="cep">Cep</label>
          <Field id="cep" value={cep} name="cep" onChange={(e) => setCep(maskCEP(e.target.value))} placeholder="Informe seu cep" />
          <button type='submit' onClick={searchInputs}>Buscar dados</button>
          <label htmlFor="rua">Rua</label>
          <Field id="rua" value={rua} onChange={(e) => setRua(e.target.value)} name="rua" placeholder="Informe sua rua" />

          <label htmlFor="complemento">Complemento</label>
          <Field id="complemento" name="complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} placeholder="Informe seu complemento" />

          <label htmlFor="bairro">Bairro</label>
          <Field id="bairro" name="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} placeholder="Informe seu bairro" />

          <label htmlFor="cidade">Cidade</label>
          <Field id="cidade" name="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder="informe sua cidade" />

          <label htmlFor="estado">Estado</label>
          <Field id="estado" name="estado" value={estado} onChange={(e) => setEstado(e.target.value)} placeholder="informe seu estado" />

          <label htmlFor="telefone">Telefone</label>
          <Field id="telefone" name="telefone" value={maskPhone(telefone)} onChange={(e) => setTelefone(e.target.value)} placeholder="informe seu telefone" />

          <button type="submit">Enviar</button>
        </Form>

      </Formik>

    </div>
  )
}
