import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

function ListEmployes() {
    const { alterEmploye, removeEmploye, list} = useContext(FormContext)

    return (
        <div>
            {
                list.length ? (
                    list.map(employe => (
                        <div key={employe.id}>
                            <h2>{employe.name}</h2>
                            <p>{employe.email}</p>
                            <p>{employe.profissao}</p>
                            <button onClick={() => removeEmploye(employe.id)}>Remover</button>
                            <button onClick={() => alterEmploye(employe.id,employe.name,employe.email,employe.profissao)}>Alterar</button>
                        </div>
                    ))) : ( <p> Não existem trabalhadores registrados </p> )
                  }
        </div>
    )
}

export default ListEmployes;