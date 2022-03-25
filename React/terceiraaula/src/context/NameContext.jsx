import { createContext,useState } from "react";

export const NameContext = createContext();

function NameProvider({children}) {
    const [name, setName] = useState('');
    const [user, setUser] = useState([])
    async function getUser() {
        const {data} = await axios.get()
        setUser(data)
    }


    return (
        
        <NameContext.Provider value={{name, setName,getUser, user}} >
            {children}
        </NameContext.Provider>

    )
}

export default NameProvider;