import React, { useContext, useEffect } from 'react'
import { Form,Field,Formik } from 'formik';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'


function Login() {
    const { handleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            navigate('/users')
        }
    })

    return (
        <div>
            <div className={styles.containerLogin}>

            <h1>Login</h1>

            <Formik
                initialValues={{
                    usuario: '',
                    senha: '',
                }}
                onSubmit={handleLogin}
            >
                <Form className={styles.login}>
                    

                    <label  htmlFor="usuario">Login
                    <Field id="usuario" name="usuario" placeholder="write your login" />
                    </label>

                    <label htmlFor="senha">Password
                    <Field id="senha" name="senha" placeholder="write your password" />
                    </label>

                    <button type="submit">Submit</button>
                    
                </Form>

            </Formik>
                </div>
        </div>
    )
}

export default Login;
