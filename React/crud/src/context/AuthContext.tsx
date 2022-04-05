import { FC, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { LoginDTO } from "../model/LoginDTO";


export const AuthContext = createContext({});

 

const AuthProvider: FC<any> = ({children}) => {
    // const [token,setToken] = useState<string>()
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(() => {
       if(!token) {
         navigate('/login')
       }
    },[]);

    useEffect(() => {
        if(token) {
            api.defaults.headers.common['Authorization'] = token;
            console.log('Entrou aqui');
        }
    }, []);

    const handleLogin =  async (user: LoginDTO) => {
        
        try {
            const {data} = await api.post('/auth', user);
            
            localStorage.setItem('token', data)
            
                        
            navigate('/')

        } catch (error) {
            console.log(error);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
