import { useContext, useEffect, useState } from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { LoginDTO } from '../../model/LoginDTO'
import { useNavigate } from 'react-router-dom'
import Logo from '../../imgs/dbc.png'
import {
    SignUp,
    DivForm,
    TitleLogin,
    ContainerLogin,
    inputStyle,
    ButtonForm,
    SubTitle,
    InfoForm,
    LabelStyle,
    ContainerLogo,
    FormStyle,
    ChangePass,
    ContainerForm
} from './Login.styles'
import { AiFillEyeInvisible, AiFillEye  } from 'react-icons/ai'
import { AuthContext } from '../../context/AuthContext'

function Login() {
    const { handleLogin } = useContext<any>(AuthContext);
    const [pass, setPass] = useState(true);
    
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/')
        }
    }, [])

    


    return (
    <ContainerForm>        
        <ContainerLogin>

            <ContainerLogo> <img src={Logo} width={'48px'} alt="Imagem do logo" /> </ContainerLogo>
            <TitleLogin> Digital Business Company </TitleLogin>

            <SubTitle> Log In to DBC </SubTitle>
            <InfoForm> Enter your email and password below
            </InfoForm>

            <Formik
                initialValues={{
                    usuario: '',
                    senha: ''
                }}
                onSubmit={(
                    values: LoginDTO,
                    { setSubmitting }: FormikHelpers<LoginDTO>
                    ) => {
                        handleLogin(values)
                        setSubmitting(false);
                    }}
                    >
            <FormStyle>
                <Form>
                    <DivForm>
                        <LabelStyle htmlFor='senha'>Usuário</LabelStyle>
                        <Field as={inputStyle} name="usuario" id="usuario" placeholder="Digite o nome do usuário" />
                    </DivForm>
                    <DivForm>
                        <LabelStyle htmlFor='senha'>Password</LabelStyle>
                        <Field as={inputStyle} name="senha" id="senha" type={pass ? 'password' : 'text'} placeholder="Digite a sua senha" />
                        <ChangePass> {pass ? <AiFillEyeInvisible onClick={() => setPass(false)} /> : <AiFillEye onClick={() => setPass(true)} />}  </ChangePass>
                    </DivForm>
                    <ButtonForm type='submit'>Log in</ButtonForm>
                </Form>            
            <SignUp> Don’t have an account? <a href="#">Sign Up</a> </SignUp>
            </FormStyle>    
            </Formik>
        </ContainerLogin>
    </ContainerForm>
    )
}

export default Login