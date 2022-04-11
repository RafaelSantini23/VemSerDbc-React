import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { TitleUsers } from "./Users.styles";
import { AiOutlineUndo, AiOutlineRest } from "react-icons/ai";
import { TableStyle, Container, ButtonTable } from "../../components/tableStyles/Table.styles";
import { AddressDiv } from "../address/Address.styles";
import { ButtonForm, ContainerForm, DivForm, FormStyle, InputStyle, LabelStyle, InputMasked } from "../../components/formStyles/Form.styles";
import { FormikHelpers, useFormik } from "formik";
import { PessoaCreateDTO } from "../../model/PessoaCreateDTO";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import api from "../../api";
import * as Yup from 'yup';
import moment from "moment";



function Users() {
  const { getUsers, person, loadingUsers, errorUsers } = useContext<any>(UserContext);
  const [edit, setEdit] = useState(false);
  const [ id,  setId ] = useState(0);
  

  useEffect(() => {
    getUsers();
  },[])
  
  const maskCpf = (cpf: string) => cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
  
  
  const createUser = async (values: PessoaCreateDTO) => {
    try {
      
      const cpf = values.cpf.split('.').join('').split('-').join('');
      const formatDate = moment(values.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD');

      const formatUser = {
        nome: values.nome,
        cpf: cpf,
        dataNascimento: formatDate,
        email: values.email,
      }
      
      
      const { data } = await api.post('/pessoa', formatUser);

      
      getUsers();
      Notify.success('Usuário criado com sucesso!');
      
      formProps.resetForm();

      console.log(data);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  
  
  const deleteUser = async (id: number) => {
    try {
      confirmAlert({
        title: 'Deseja realmente excluir este usuário?',
        message: 'Tem certeza disso.',
        buttons: [
          {
            label: 'Yes',
            onClick: async () => {
              const { data } = await api.delete(`/pessoa/${id}`);
              console.log(data);
              Notify.success('Usuário deletado com sucesso!');
              getUsers()
            }
          },
          {
            label: 'No',
            onClick: () => Notify.success('Operação cancelada!')
            
          }
        ]
      });
      
      getUsers()
    } catch (error) {
      console.log(error);
      
    }
  }

  const getPersonById = async (idPerson: number, setFieldValue: any) => {
    try {
      const { data } = await api.get(`/pessoa/{idPessoa}?idPessoa=${idPerson}`);

      setFieldValue('nome', data.nome);
      setFieldValue('email', data.email);
      setFieldValue('cpf', data.cpf);
      setFieldValue('dataNascimento', moment(data.dataNascimento, 'YYYY-MM-DD').format('DD/MM/YYYY'));
      setEdit(true);
      setId(idPerson);
      console.log(data);
    } catch (error) {
      console.log(error);  
    }
  }

  const updateUser = async (values: PessoaCreateDTO) => {
    try {
      const cpf = values.cpf.split('.').join('').split('-').join('');
      const formatDate = moment(values.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD');

      const alteredUser = {
        idPessoa: id,
        nome: formProps.values.nome,
        cpf: cpf,
        email: formProps.values.email,
        dataNascimento: formatDate,
      }

      const { data } = await api.put(`/pessoa/${id}`, alteredUser)

      formProps.resetForm()
      Notify.success('Usuário alterado com sucesso!');
      getUsers()
      setEdit(false)
      console.log(data);
      
    } catch (error) {
      Notify.failure('Erro ao alterar usuário!');
      console.log(error);
      
    }
  }

    const formProps = useFormik({
      initialValues: {
        nome: "",
        cpf: "",
        dataNascimento: "",
        email: "",
      },

      validationSchema: Yup.object().shape({
        nome: Yup.string()
          .min(2, 'Nome muito pequeno!')
          .max(50, 'Nome muito longo!')
          .matches(/^[a-zA-Z\s]+$/, 'Nome inválido!')
          .required('Favor preencha o campo'),
        dataNascimento: Yup.string()
          .required('Favor preencha o campo'),
        cpf: Yup.string()
          .required('Favor preencha o campo'),  
        email: Yup.string().email('Email Inválido').required('Favor preencha o campo'),
      }),
      
      onSubmit: (values: PessoaCreateDTO, { setSubmitting }: FormikHelpers<PessoaCreateDTO>) => {   
        if(edit) {
          updateUser(values)
        } else {
          createUser(values)
        }
       setSubmitting(false)
      },
    });
  

    return (
     <>
     <AddressDiv>
          <ContainerForm
            width='950px'
            height='560px'
            bs='0px 4px 12px rgba(55, 81, 255, 0.24)'
            color='#fff'
          >
            <FormStyle>
  
              <form onSubmit={formProps.handleSubmit}>
                <DivForm>
                  <LabelStyle htmlFor="nome">Nome</LabelStyle>
                  <InputStyle 
                  id="nome"
                  name="nome"
                  type="nome"
                  placeholder="Digite seu nome"
                  onChange={formProps.handleChange}
                  value={formProps.values.nome}
                  />
                {formProps.errors.nome && formProps.touched.nome ? (
                <div>{formProps.errors.nome}</div>
                ) : null}
                </DivForm>  
                <DivForm>
                <LabelStyle htmlFor="cpf">CPF</LabelStyle>
                <>
                  <InputMasked 
                  id="cpf"
                  name="cpf"
                  mask='999.999.999-99'
                  type="cpf"
                  placeholder="Digite seu cpf"
                  onChange={formProps.handleChange}
                  value={formProps.values.cpf}
                  />
                  </>
                  

                {formProps.errors.cpf && formProps.touched.cpf ? (
                <div>{formProps.errors.cpf}</div>
                ) : null}
                </DivForm>
  
                <DivForm>
                <LabelStyle htmlFor="email">Email</LabelStyle>
                  <InputStyle 
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Digite seu email"
                  onChange={formProps.handleChange}
                  value={formProps.values.email}
                  />
                  {formProps.errors.email && formProps.touched.email ? (
                  <div>{formProps.errors.email}</div>
                  ) : null}
                 
                </DivForm>
                <DivForm>
                <LabelStyle htmlFor="dataNascimento">Data De Nascimento</LabelStyle>
                  <InputMasked 
                  id="dataNascimento"
                  name="dataNascimento"
                  type="dataNascimento"
                  mask='99/99/9999'
                  placeholder="Digite sua data de nascimento"
                  onChange={formProps.handleChange}
                  value={formProps.values.dataNascimento}
                  />

                {formProps.errors.dataNascimento && formProps.touched.dataNascimento ? (
                  <div>{formProps.errors.dataNascimento}</div>
                  ) : null}

                </DivForm>
  
                <ButtonForm width='820px' type="submit"> { edit ? 'Atualizar' : 'Cadastrar' }  </ButtonForm>
              </form>
            </FormStyle>

          </ContainerForm>
        
      <Container>
        { !errorUsers ? loadingUsers ?  <Loader  /> : 
        <> 
        
        <TitleUsers> Users </TitleUsers> 
       <TableStyle>
         <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>CPF</th>
            <th>DataNascimento</th>
            <th>Atualizar</th>
            <th>Deletar</th>
          </tr>
         </thead>
         <tbody>
       {person.map((user: string | any) => (
         <tr key={user.idPessoa}>
           <td>{user.nome}</td>
           <td>{user.email}</td>
           <td>{maskCpf(user.cpf)}</td>
           <td>{moment(user.dataNascimento).format('DD/MM/YYYY')}</td>
           <td> <ButtonTable color='blue' onClick={() => { getPersonById(user.idPessoa, formProps.setFieldValue) }} > <AiOutlineUndo /></ButtonTable> </td>
           <td> <ButtonTable color='red' onClick={() => { deleteUser(user.idPessoa) }}> <AiOutlineRest /></ButtonTable> </td>

         </tr>
       ))}
         </tbody>
       </TableStyle></>  
       : <Error widthImg="420px" />}

     
      </Container>
      </AddressDiv>
       </>
  )
}

export default Users;