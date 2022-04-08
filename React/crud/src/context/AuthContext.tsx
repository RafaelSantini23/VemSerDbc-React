import api from "../api";
import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDTO } from "../model/LoginDTO";



export const AuthContext = createContext({});

const AuthProvider: FC<ReactNode> = ({children}) => {
    // const [token,setToken] = useState<string>()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true);
    const [isToken, setIsToken] = useState(false);


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
        }
    }

    
    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsToken(false)
        navigate('/login')
    }

    if(loading) {
        return ( <h1>Loading...</h1> )
    }


    return (
        <AuthContext.Provider value={{handleLogin, handleLogout, setLoading, isToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
