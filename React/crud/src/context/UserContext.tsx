import api from "../api";
import { FC, createContext, useState, ReactNode, useEffect } from "react";
import { PessoaDTO } from "../model/PessoaDTO";


export const UserContext = createContext({});

const UserProvider: FC<ReactNode> = ({children}) => {

    const [loadingUsers, setLoadingUsers] = useState(true);
    const [person, setPerson] = useState<PessoaDTO["person"]>([]);
    const [errorUsers, setErrorUsers] = useState(false);
    


    
    const getUsers = async () => {
        try {
            const {data} = await api.get('/pessoa');
            setPerson(data)
            console.log(person);
            setLoadingUsers(false)
            
        } catch (error) {
            setErrorUsers(true)
            setLoadingUsers(true)
            console.log(error);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <UserContext.Provider value={{ getUsers, person, loadingUsers, errorUsers }}>
            {children}
        </UserContext.Provider>
    )

    
}

export default UserProvider;