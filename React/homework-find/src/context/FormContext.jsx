import { createContext, useState } from "react";


export const FormContext = createContext()

function FormProvider({children}) {
    const [list, setList] = useState([]);
    const [id, setId] = useState(0);
    const [name, setName]  = useState('');
    const [email, setEmail]  = useState('');
    const [profissao, setProfissao]  = useState('');

    const addEmploye = (e) => {
        e.preventDefault();
        
        setList([...list, { id, name, email, profissao}]);

        setId(id + 1);
    } 
    
    const removeEmploye = (id) => {
        const newEmploye = list.filter(employe => employe.id != id);
        setList(newEmploye)
    }

    const alterEmploye = (id,name, email, profissao) => {
        setId(id)
        setName(name);
        setEmail(email);
        setProfissao(profissao);

        const newEmployes = list.filter(employe => employe.id != id)
        setList(newEmployes)
    }

    console.log(list);

    
    return (
        <FormContext.Provider value={{id, name, setName, email, setEmail, profissao, setProfissao, addEmploye, removeEmploye, alterEmploye,list }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider;