import { createContext, useState } from "react";
import api from '../api';


export const UserContext = createContext();

function UserProvider({children}) {

    const [ peoples, setPeoples ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(false)

    const getPeoples = async () => {
        try {
          const { data } = await api.get('/pessoa')
          setLoading(false)
          setPeoples(data)
        } catch (error) {
          console.log('Houve um erro ao carregar as informações', error);
          setLoading(false)
          setError(true)
        }
      }
    return (
        <UserContext.Provider value={{ getPeoples, peoples, loading, error }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;