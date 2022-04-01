import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/loading/LoadingGif";
import api from '../api';


export const AuthContext = createContext()

function AuthProvider({children}) {
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(true);
    const navigation = useNavigate();

    const  handleLogin = async (values) => {

        try {
            const {data} = await api.post('/auth', values);
            setToken(data);
            localStorage.setItem('token', data);
            setLoading(false);
            api.defaults.headers.common['Authorization'] = data;
            navigation('/users');
            alert('Seja Bem Vindo');
        } catch (error) {
            alert('Usuario não encontrado!');
            console.log('Ocorreu um erro', error);
        }

    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            api.defaults.headers.common['Authorization'] = token;
        }
        setLoading(false)
    }, [])

    const handleLogout = () => {
        setLoading(false);
        localStorage.removeItem('token');
        navigation('/login');
    }

    const isLogado = () => {
        const token = localStorage.getItem('token');
        if(!token) {
            navigation('/login')
        } 
    }


    if(loading) {
        return (
            <Loading />
        )
    }


    
    return (
        <AuthContext.Provider value={{handleLogin, handleLogout, token, isLogado, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;