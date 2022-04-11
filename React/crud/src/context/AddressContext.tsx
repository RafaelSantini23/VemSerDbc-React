import { createContext, FC, ReactNode, useEffect, useState } from "react";
import api from "../api";
import { ListaEnderecoDTO } from "../model/ListaEnderecoDTO";


export const AddressContext = createContext({});

const AddressProvider: FC<ReactNode> = ({children}) => {
    const [address, setAddress] = useState<ListaEnderecoDTO['endereco']>([])
    const [loadingAddress, setLoadingAddress] = useState(true)
    const [errorAddress, setErrorAddress] = useState(false);

    
    
    const getListAddress = async () => {
        try {
            const { data } = await api.get('/endereco');
            console.log(data);
            setLoadingAddress(false)
            setAddress(data)
            setErrorAddress(false)
        } catch (error) {
            setLoadingAddress(false)
            setErrorAddress(true)
            console.log(error);
        }
    }

    useEffect(() => {
        getListAddress()
    },[])

    return (
        <AddressContext.Provider value={{getListAddress, address, loadingAddress, errorAddress}}>
            {children}
        </AddressContext.Provider>
    )

}

export default AddressProvider;