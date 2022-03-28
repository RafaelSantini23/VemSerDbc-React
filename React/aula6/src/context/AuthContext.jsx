import { useState,createContext } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api'

export const AuthContext = createContext()

function AuthProvider({children}) {
    const [token, setToken] = useState('')
    const [login, setLogin] = useState(false)
    const navigation = useNavigate()

    const  handleLogin = async (values) => {

        try {
            const {data} = await api.post('/auth', values)
            setToken(data)
            localStorage.setItem('token',JSON.stringify(data))
            setLogin(true)
            api.defaults.headers.Authorization = data;
            navigation('/users')
            alert('Seja Bem Vindo')
            
        } catch (error) {
            alert('Usuario não encontrado!')
            console.log('Ocorreu um erro', error);
        }

    }

    const handleLogout = () => {
        setLogin(false)
        localStorage.removeItem('token')
        navigation('/login')
    }

    return (
        <AuthContext.Provider value={{handleLogin, handleLogout, login, token}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;