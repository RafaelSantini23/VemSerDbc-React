import { useContext, useEffect, useState } from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { LoginDTO } from '../../model/LoginDTO'
import { useNavigate } from 'react-router-dom'
import {
    SignUp,
    TitleLogin,
    ContainerLogin,
    SubTitle,
    InfoLogin,
    ContainerLogo,
    FormStyle,
    ChangePass,
} from './Login.styles'
import { ButtonForm, DivForm, InputStyle, LabelStyle, ContainerForm } from '../../components/formStyles/Form.styles'
import { AiFillEyeInvisible, AiFillEye  } from 'react-icons/ai'
import { AuthContext } from '../../context/AuthContext'
import Logo from '../../imgs/dbc.png'
import Loader from '../../components/Loader/Loader'

function Login() {
    const { handleLogin, loading } = useContext<any>(AuthContext);
    const [pass, setPass] = useState(true);
    
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/')
        }
    }, [])
    return (
    <ContainerForm 
        width='100vw' 
        height='100vh' 
        color='#363740'
        flex='flex'
        column='column'
    >        
        <ContainerLogin>

            <ContainerLogo> <img src={Logo} width={'48px'} alt="Imagem do logo" /> </ContainerLogo>
            <TitleLogin> Digital Business Company </TitleLogin>

            <SubTitle> Log In to DBC </SubTitle>
            <InfoLogin> Enter your email and password below
            </InfoLogin>

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
                        <Field width='316px' as={InputStyle} name="usuario" id="usuario" placeholder="Digite o nome do usuário" />
                    </DivForm>
                    <DivForm>
                        <LabelStyle htmlFor='senha'>Password</LabelStyle>
                        <Field width='316px' as={InputStyle} name="senha" id="senha" type={pass ? 'password' : 'text'} placeholder="Digite a sua senha" />
                        <ChangePass> {pass ? <AiFillEyeInvisible onClick={() => setPass(false)} /> : <AiFillEye onClick={() => setPass(true)} />}  </ChangePass>
                    </DivForm>
                    <ButtonForm width='316px' type='submit'>Log in  </ButtonForm>
                </Form>            
            <SignUp> Don’t have an account? <a href="#">Sign Up</a> </SignUp>
            </FormStyle>    
            </Formik>
        </ContainerLogin>
        
    </ContainerForm>
    )
}

export default Login