import React, { useContext } from 'react'
import { Form,Field,Formik } from 'formik';
import { AuthContext } from '../context/AuthContext';

function Login() {
    const { handleLogin } = useContext(AuthContext)

    return (
        <div>
            <h1>Login</h1>

            <Formik
                initialValues={{
                    usuario: '',
                    senha: '',
                }}
                onSubmit={handleLogin}
            >
                <Form>
                    <label htmlFor="usuario">Login</label>
                    <Field id="usuario" name="usuario" placeholder="write your login" />

                    <label htmlFor="senha">Password</label>
                    <Field id="senha" name="senha" placeholder="write your password" />

                    <button type="submit">Submit</button>
                </Form>

            </Formik>
        </div>

    )
}

export default Login;
