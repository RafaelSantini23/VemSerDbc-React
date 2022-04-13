import { apiAuth } from "../../api";



export const handleLogin = async(values, dispatch, navigate) => {  
    try {
        const {data} = await apiAuth.post('/auth', values);
        console.log(data);
        const logado = {
            type: 'SET_LOGIN',
            token: data,
            auth: true,
            loading: false,
            error: false
        }
        apiAuth.defaults.headers.common['Authorization'] = data
        localStorage.setItem('token', data);
        navigate('/')
        dispatch(logado);
    } catch (error) {
        console.log(error);
    }
}



export const handleLogout = (dispatch) => {
    const logout = {
        type: 'SET_LOGOUT',
        token: '',
        auth: false,
    }
    localStorage.removeItem('token');
    dispatch(logout);
}

export const isAuth = dispatch => {
    const auth = {
        type: 'SET_AUTH',
        auth: true,
    }
    dispatch(auth);
}


