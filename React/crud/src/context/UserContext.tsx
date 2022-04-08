import api from "../api";
import { FC, createContext, useState, ReactNode } from "react";
import { PessoaDTO } from "../model/PessoaDTO";


export const UserContext = createContext({});

const UserProvider: FC<ReactNode> = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [person, setPerson] = useState<PessoaDTO["person"]>([]);

    
    const getUsers = async () => {
        try {
            const {data} = await api.get('/pessoa');
            // console.log(data);
            setPerson(data)
            console.log(person);
            
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserContext.Provider value={{ getUsers, person }}>
            {children}
        </UserContext.Provider>
    )

    
}

export default UserProvider;