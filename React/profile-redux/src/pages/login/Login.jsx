import { useFormik } from 'formik';
import {connect} from 'react-redux';     
import { handleLogin, isAuth } from '../../store/actions/AuthAction';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login({auth, dispatch}) {
        const navigate = useNavigate()
        
        useEffect(() => {
            const token = localStorage.getItem('token');
            if(token) {
                navigate('/')
                isAuth(dispatch)
            } else {
                navigate('/login')
            }
        }, [])
    

        const formik = useFormik({
          initialValues: {
            usuario: '',
            senha: '',
          },
          onSubmit: values => {
            handleLogin(values, dispatch, navigate);

          },
        });
     
  return (
    <div>
         <form onSubmit={formik.handleSubmit}>
       <label htmlFor="usuario">usuario:</label>
       <input
         id="usuario"
         name="usuario"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.usuario}
       />
       <label htmlFor="senha">Senha:</label>
       <input
         id="senha"
         name="senha"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.senha}
       />
       <button type="submit">Submit</button>
     </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
    auth: state.authReducer.auth
})


export default connect(mapStateToProps)(Login);