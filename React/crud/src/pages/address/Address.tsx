import { FormikHelpers, useFormik } from 'formik';
import { AiOutlineUndo, AiOutlineRest } from 'react-icons/ai'
import * as Yup from 'yup';
import axios from 'axios';
import { EnderecoDTO } from '../../model/EnderecoDTO';
import api from '../../api';
import { useContext, useEffect, useState } from 'react';
import { InputSelect, FormStyle, DivForm, ButtonForm, ContainerForm, InputStyle, LabelStyle, InputMasked } from '../../components/formStyles/Form.styles';
import { TableStyle, Container, ButtonTable, } from '../../components/tableStyles/Table.styles';
import { TitleUsers, } from "../users/Users.styles";
import { AddressDiv } from './Address.styles';
import { AddressContext } from '../../context/AddressContext';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function Address() {
  const { getListAddress, address, loadingAddress, errorAddress } = useContext<any>(AddressContext);
  const [id, setId] = useState(0);
  const [edit, setEdit] = useState(false);
  

  async function getAddress(values: EnderecoDTO, setFieldValue: any) {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${values.cep}/json/`);
      setFieldValue('logradouro', data.logradouro);
      setFieldValue('complemento', data.complemento);
      setFieldValue('localidade', data.localidade);
      setFieldValue('uf', data.uf);
      Notify.success('CEP encontrado com sucesso!');
    } catch (error) {
      Notify.failure('CEP não encontrado!');
      console.log(error);

    }

  }

  const maskCep = (cep: string) => cep.replace(/(\d{5})(\d{3})/, "$1-$2");

  async function createAddress(values: EnderecoDTO) {
    console.log('entrou aqui');
    
    try {
      const cep = values.cep.split('-').join('');
      
      const addressUpdated = {
        cep: cep,
        cidade: formProps.values.localidade,
        complemento: formProps.values.complemento,
        estado: formProps.values.uf,
        logradouro: formProps.values.logradouro,
        numero: +formProps.values.numero,
        pais: formProps.values.pais,
        tipo: formProps.values.tipo,
      }


      setEdit(false)

      formProps.resetForm();

      const { data } = await api.post('endereco/573', addressUpdated)
      console.log(data);
      Notify.success('Endereço cadastrado com sucesso!');
      getListAddress();
    } catch (error) {
      console.log(error);
    }
  }

  const deleteAddress = async (id: number) => {
    try {
      confirmAlert({
        title: 'Deseja realmente apagar este endereço?',
        message: 'Tem certeza disso.',
        buttons: [
          {
            label: 'Yes',
            onClick: async () => {
              const { data } = await api.delete(`/endereco/${id}`)
              console.log(data);
              Notify.success('Endereço excluído com sucesso!');
              console.log(data.status);
              getListAddress()
            }
          },
          {
            label: 'No',
            onClick: () => Notify.success('Operação cancelada!')
          }
        ]
      });
      
    } catch (error) {
      Notify.failure('Erro ao excluir endereço!');
      console.log(error);
      
    }
  }



  const getAddressById = async (idEnd: number, setFieldValue: any) => {
    try {
      const { data } = await api.get(`/endereco/${idEnd}`);
      console.log(data);
      setFieldValue('logradouro', data.logradouro);
      setFieldValue('numero', data.numero);
      setFieldValue('complemento', data.complemento);
      setFieldValue('bairro', data.bairro);
      setFieldValue('localidade', data.cidade);
      setFieldValue('uf', data.estado);
      setFieldValue('cep', data.cep);
      setFieldValue('pais', data.pais);
      setFieldValue('tipo', data.tipo);
      console.log(edit);
      
      setId(idEnd)
      setEdit(true);
      console.log(id);
      

      console.log(data);
    } catch (error) {
      console.log(error);
  }
}

const updateAddress = async (values: EnderecoDTO) => {
  try {
    const cep = values.cep.split('-').join('');

    const updatedAddress = {
      idEndereco: id,
      cep: cep,
      cidade: formProps.values.localidade,
      complemento: formProps.values.complemento,
      estado: formProps.values.uf,
      logradouro: formProps.values.logradouro,
      numero: +formProps.values.numero,
      pais: formProps.values.pais,
      tipo: formProps.values.tipo,
    }
    
    const { data } = await api.put(`/endereco/${id}`, updatedAddress)
    console.log(id);

    setEdit(false);
    Notify.success('Endereço atualizado com sucesso!');
    formProps.resetForm()
    getListAddress()
    
    console.log(data);
    
  } catch (error) {
    Notify.failure('Erro ao atualizar endereço!');
    console.log(error);
  }
}
  

  useEffect(() => {
    getListAddress();
    
  }, [id])

  const formProps = useFormik({
    initialValues: {
      cep: '',
      logradouro: '',
      complemento: '',
      localidade: '',
      uf: '',
      numero: '',
      pais: '',
      tipo: 'COMERCIAL',
    },
    
    validationSchema: Yup.object({
      cep: Yup.string()
        .required('O CEP é obrigatório'),
      logradouro: Yup.string()
        .min(2, 'O logradouro deve ter no mínimo 2 caracteres')
        .max(50, 'O logradouro deve ter no máximo 100 caracteres')
        .required('O logradouro é obrigatório'),
      complemento: Yup.string()
        .min(2, 'O complemento deve ter no mínimo 2 caracteres')
        .max(50, 'O complemento deve ter no máximo 100 caracteres')
        .required('O complemento é obrigatório'),
      localidade: Yup.string()
        .min(2, 'A localidade deve ter no mínimo 2 caracteres')
        .max(50, 'A localidade deve ter no máximo 100 caracteres')
        .required('A cidade é obrigatória'),
      uf: Yup.string()
        .min(2, 'O estado deve ter no mínimo 2 caracteres')
        .max(2, 'O estado deve ter no máximo 2 caracteres')
        .required('O estado é obrigatório'),
      numero: Yup.number()
        .integer()
        .typeError('Apenas números')
        .positive('O número deve ser positivo')
        .required('O número é obrigatório'),
      pais: Yup.string()
        .min(2, 'O país deve ter no mínimo 2 caracteres')
        .max(50, 'O país deve ter no máximo 100 caracteres')
        .required('O país é obrigatório'),
    }),
    onSubmit:  (values: EnderecoDTO, { setSubmitting }: FormikHelpers<EnderecoDTO>) => {
      console.log('entrou aqui');
      if(edit) {
          updateAddress(values)
      } else {
          createAddress(values)
        }
        setSubmitting(false);
      },
  });

  return (

    <>
      <AddressDiv>
        <ContainerForm
          width='1200px'
          height='1100px'
          bs='0px 4px 12px rgba(55, 81, 255, 0.24)'
          color='#fff'
        >
          <FormStyle>

            <form onSubmit={formProps.handleSubmit}>
              <DivForm>
                <LabelStyle htmlFor="cep">Cep</LabelStyle>
                <InputMasked
                  id="cep"
                  name="cep"
                  type="text"
                  mask={'99999-999'}
                  onChange={formProps.handleChange}
                  value={formProps.values.cep}
                />
                {formProps.errors.cep && formProps.touched.cep ? (
                  <div>{formProps.errors.cep}</div>
                ) : null}
              <ButtonForm width='820px' type='button' onClick={() => getAddress(formProps.values, formProps.setFieldValue)}> Buscar </ButtonForm >
              </DivForm>
                  
              <DivForm>
                <LabelStyle htmlFor="logradouro">Logradouro</LabelStyle>

                <InputStyle
                  id="logradouro"
                  name="logradouro"
                  type="text"
                  onChange={formProps.handleChange}
                  value={formProps.values.logradouro}
                />

                {formProps.errors.logradouro && formProps.touched.logradouro ? (
                  <div>{formProps.errors.logradouro}</div>
                ) : null}
              </DivForm>

              <DivForm>

                <LabelStyle htmlFor="complemento">Complemento</LabelStyle>
                <InputStyle
                  id="complemento"
                  name="complemento"
                  type="complemento"
                  onChange={formProps.handleChange}
                  value={formProps.values.complemento}
                />
                {formProps.errors.complemento && formProps.touched.complemento ? (
                  <div>{formProps.errors.complemento}</div>
                ) : null}


              </DivForm>

              <DivForm>

                <LabelStyle htmlFor="localidade">Cidade</LabelStyle>
                <InputStyle
                  id="localidade"
                  name="localidade"
                  type="localidade"
                  onChange={formProps.handleChange}
                  value={formProps.values.localidade}
                />
                {formProps.errors.localidade && formProps.touched.localidade ? (
                  <div>{formProps.errors.localidade}</div>
                ) : null}
              </DivForm>
              <DivForm>

                <LabelStyle htmlFor="uf">Estado</LabelStyle>
                <InputStyle
                  id="uf"
                  name="uf"
                  type="uf"
                  onChange={formProps.handleChange}
                  value={formProps.values.uf}
                />
                {formProps.errors.uf && formProps.touched.uf ? (
                  <div>{formProps.errors.uf}</div>
                ) : null}
              </DivForm>
              <DivForm>
                <LabelStyle htmlFor="numero">Numero</LabelStyle>
                <InputStyle
                  id="numero"
                  name="numero"
                  type="numero"
                  onChange={formProps.handleChange}
                  value={formProps.values.numero}
                />
                {formProps.errors.numero && formProps.touched.numero ? (
                  <div>{formProps.errors.numero}</div>
                ) : null}
              </DivForm>
              <DivForm>
                <LabelStyle htmlFor="pais">pais</LabelStyle>
                <InputStyle
                  id="pais"
                  name="pais"
                  type="pais"
                  onChange={formProps.handleChange}
                  value={formProps.values.pais}
                />
                {formProps.errors.pais && formProps.touched.pais ? (
                  <div>{formProps.errors.pais}</div>
                ) : null}
              </DivForm>

              <DivForm>
                <LabelStyle htmlFor="tipo">Tipo</LabelStyle>
                <InputSelect name="tipo" value={formProps.values.tipo} onChange={formProps.handleChange}>
                  <option value="COMERCIAL">COMERCIAL</option>
                  <option value="RESIDENCIAL">RESIDENCIAL</option>
                </InputSelect>
              </DivForm>

              <ButtonForm width='820px' type="submit"> { edit ? 'Atualizar' : 'Cadastrar' } </ButtonForm>
            </form>
          </FormStyle>



        </ContainerForm>
        
        
        <Container>
        {!errorAddress ? loadingAddress ? <Loader /> : (  
          <>
        <TitleUsers> Address List </TitleUsers>
        
       
          <TableStyle>
            <thead>
              <tr>
                <th>Rua</th>
                <th>Cep</th>
                <th>Cidade</th>
                <th>Complemento</th>
                <th>Estado</th>
                <th>Numero</th>
                <th>Pais</th>
                <th>Tipo</th>
                <th>Atualizar</th>
                <th>Deletar</th>
              </tr>
            </thead>
            <tbody>
              {address.map((address: string | any) => (
                <tr key={address.idEndereco}>
                  <td>{address.logradouro}</td>
                  <td>{maskCep(address.cep)}</td>
                  <td>{address.cidade}</td>
                  <td>{address.complemento}</td>
                  <td>{address.estado}</td>
                  <td>{address.numero}</td>
                  <td>{address.pais}</td>
                  <td>{address.tipo}</td>
                  <td> <ButtonTable color='blue' onClick={() => { getAddressById(address.idEndereco, formProps.setFieldValue) }}> <AiOutlineUndo /></ButtonTable> </td>
                  <td> <ButtonTable color='red' onClick={() => { deleteAddress(address.idEndereco) }}> <AiOutlineRest /></ButtonTable> </td>
                </tr>
              ))}
            </tbody>
          </TableStyle> </> ) : <Error widthImg='420px' /> }
          
         
         
        </Container>
      </AddressDiv>
    </>
  )
}

export default Address