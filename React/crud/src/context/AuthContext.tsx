import api from "../api";
import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDTO } from "../model/LoginDTO";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import { Notify } from 'notiflix/build/notiflix-notify-aio';



export const AuthContext = createContext({});

const AuthProvider: FC<ReactNode> = ({children}) => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true);
    const [isToken, setIsToken] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
       const token = localStorage.getItem('token');
       if(token) {
           api.defaults.headers.common['authorization'] = token;
           setIsToken(true)
       } else {
           navigate('/login')
       }

       setLoading(false)
    },[]);
    
      

    const handleLogin =  async (user: LoginDTO) => {
        
        try {
            const {data} = await api.post('/auth', user);
            localStorage.setItem('token', data);
            setIsToken(true)
            setLoading(false)
            api.defaults.headers.common['authorization'] = data           
            navigate('/');

        } catch (error) {
            console.log(error);
            Notify.failure('Usuário ou senha inválidos');
            setError(true)
        }
    }

    
    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsToken(false)
        navigate('/login')
    }

    if(loading) {
        return ( <Loader /> )
    }

    


    return (
        <AuthContext.Provider value={{handleLogin, handleLogout, setLoading, isToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
