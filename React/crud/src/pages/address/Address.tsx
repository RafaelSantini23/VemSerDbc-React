import { Formik, Form, Field, FormikHelpers } from 'formik';
import axios from 'axios';
import { EnderecoDTO } from '../../model/EnderecoDTO';
import api from '../../api';
import { FormStyle, ContainerForm, inputSelect } from './Address.styles';
import { inputStyle, ButtonForm } from '../login/Login.styles';
import * as Yup from 'yup';
import { ListaEnderecoDTO } from '../../model/ListaEnderecoDTO';
import { useEffect, useState } from 'react';
import { TitleUsers,ContainerUsers, TableUsers } from "../users/Users.styles";
import { AddressDiv, ButtonTable } from './Address.styles';


function Address(props: any) {
  const [address, setAddress] = useState<ListaEnderecoDTO["endereco"]>([]);


  async function getAddress(values: EnderecoDTO, setFieldValue: any) {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${values.cep}/json/`);
      setFieldValue('bairro', data.bairro);
      setFieldValue('logradouro', data.logradouro);
      setFieldValue('complemento', data.complemento);
      setFieldValue('localidade', data.localidade);
      setFieldValue('uf', data.uf);

    } catch (error) {
      console.log(error);
    }

  }

  

  async function createAddress(values: EnderecoDTO) {
    try {
      const addressUpdated = {
        cep: values.cep,
        cidade: values.localidade,
        complemento: values.complemento,
        estado: values.uf,
        logradouro: values.logradouro,
        numero: +values.numero,
        pais: values.pais,
        tipo: values.tipo,
      }

      const { data } = await api.post('endereco/573', addressUpdated)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }



   const getListAddress = async () => {
    try {
      const { data } = await api.get('/endereco');
      console.log(data);
      setAddress(data);
      
      console.log(address);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteAddress = async (id: number) => {
    try {
      const {data} = await api.delete(`/endereco/${id}`);
      console.log(data);
      getListAddress();
    } catch (error) {
      console.log(error);
    }
  }


  const updateAddress = async (id: number, setFieldValue: any) => {
    try {
      const {data} = await api.get(`/endereco/${id}`);
      console.log(data);
      // setFieldValue('cep', data.cep);
      // setFieldValue('logradouro', data.logradouro);
      // setFieldValue('complemento', data.complemento);
      // setFieldValue('bairro', data.bairro);
      // setFieldValue('localidade', data.localidade);
      // setFieldValue('uf', data.uf);
      // setFieldValue('numero', data.numero);
      // setFieldValue('pais', data.pais);
      // setFieldValue('tipo', data.tipo);

      //setar os valores nos inputs do formulario


      
      console.log(data); 
    } catch (error) {
      console.log(error);
    }
  
  }




  useEffect(() => {
    getListAddress();
  },[])





  


  const SignupSchema = Yup.object().shape({

    logradouro: Yup.string()
      .min(2, 'muito curto')
      .max(50, 'muito longo')
      .required('Favor preencha o campo '),

    bairro: Yup.string()
      .min(2, 'muito curto')
      .max(50, 'muito longo')
      .required('Favor preencha o campo '),

    cep: Yup.string()
      .min(1, 'muito curto')
      .max(9, 'Cep precisa de apenas 9 digitos')
      .required('Favor preencha o campo '),

    localidade: Yup.string()
      .min(2, 'muito curto')
      .max(50, 'muito longo')
      .required('Favor preencha o campo '),

    pais: Yup.string()
      .min(0, 'muito curto')
      .max(2, 'Apenas a sigla do estado')
      .required('Favor preencha o campo '),

    numero: Yup.number()
      .min(0, 'muito curto')
      .max(2, 'Apenas a sigla do estado')
      .required('Favor preencha o campo ')
  });



  return (

  <>
  <AddressDiv>


    <ContainerForm>

      <Formik
        initialValues={{
          cep: '',
          logradouro: '',
          complemento: '',
          bairro: '',
          localidade: '',
          uf: '',
          numero: '',
          pais: '',
          tipo: 'COMERCIAL',
        }}
        validationSchema={SignupSchema}
        onSubmit={
          (values: EnderecoDTO,
            { setSubmitting }: FormikHelpers<EnderecoDTO>) => {
            createAddress(values)
            setSubmitting(false);
          }
        }
      >
        {props => (
          <FormStyle>


            <Form>

              <label htmlFor="cep">Cep</label>
              <Field as={inputStyle} type="text" name="cep" placeholder="Digite seu CEP" />
              {props.errors.cep && props.touched.cep ? (
                <div>{props.errors.cep}</div>
              ) : null}

              <ButtonForm type='button' onClick={() => getAddress(props.values, props.setFieldValue)}> Buscar </ButtonForm >

              <label htmlFor="logradouro">Logradouro</label>
              <Field as={inputStyle} type="text" name="logradouro" placeholder="Digite seu Logradouro" />

              {props.errors.logradouro && props.touched.logradouro ? (
                <div>{props.errors.logradouro}</div>
              ) : null}


              <label htmlFor="complemento">Complemento</label>
              <Field as={inputStyle} type="text" name="complemento" placeholder="Digite seu Complemento" />


              <label htmlFor="bairro">Bairro</label>
              <Field as={inputStyle} type="text" name="bairro" placeholder="Digite seu Bairro" />

              {props.errors.bairro && props.touched.bairro ? (
                <div>{props.errors.bairro}</div>
              ) : null}

              <label htmlFor="localidade">Cidade</label>
              <Field as={inputStyle} type="text" name="localidade" placeholder="Digite sua Localidade" />

              {props.errors.localidade && props.touched.localidade ? (
                <div>{props.errors.localidade}</div>
              ) : null}

              <label htmlFor="uf">Estado</label>
              <Field as={inputStyle} type="text" name="uf" placeholder="Digite seu UF" />

              <label htmlFor="numero">Numero</label>
              <Field as={inputStyle} type="text" name="numero" placeholder="Digite seu numero" />

              <label htmlFor="pais">Pais</label>
              <Field as={inputStyle} type="text" name="pais" placeholder="Digite seu pais" />

              {props.errors.pais && props.touched.pais ? (
                <div>{props.errors.pais}</div>
              ) : null}

              <label htmlFor="tipo">Tipo</label>
              <Field as={inputSelect} name="tipo">
                <option value="COMERCIAL">COMERCIAL</option>
                <option value="RESIDENCIAL">RESIDENCIAL</option>
              </Field>

              <ButtonForm type="submit" >
                Cadastrar endereço
              </ButtonForm>

            </Form>
          </FormStyle>
        )}

      </Formik>
      
    </ContainerForm>
    <ContainerUsers>
       <TitleUsers> Address List </TitleUsers> 
       <TableUsers>
         <thead>
          <tr>
            <th>Rua</th>
            <th>Cep</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Numero</th>
            <th>Pais</th>
            <th>Tipo</th>
            <th>Atualizar</th>
            <th>Deletar</th>
          </tr>
         </thead>
         <tbody>
       {address.map((user: string | any) => (
         <tr key={user.idEndereco}>
            <td>{user.logradouro}</td>
            <td>{user.cep}</td>
            <td>{user.cidade}</td>
            <td>{user.estado}</td>
            <td>{user.numero}</td>
            <td>{user.pais}</td>
            <td>{user.tipo}</td>
            <td> <ButtonTable onClick={() => { updateAddress(user.idEndereco, props.values ) }}> att</ButtonTable> </td> 
            <td> <ButtonTable onClick={() => { deleteAddress(user.idEndereco) }}> del </ButtonTable> </td> 
         </tr>
       ))}
         </tbody>
       </TableUsers>
      </ContainerUsers>
          </AddressDiv>
       </>


  )
}

export default Address