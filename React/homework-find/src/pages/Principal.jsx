import {useContext} from 'react';
import ListEmployes from '../components/ListEmployes/ListEmployes';
import { FormContext } from '../context/FormContext';

function Principal() {
    const {name,setName,email,setEmail,profissao,setProfissao,addEmploye} = useContext(FormContext)

    return (
        <div>
        <h1>Registre-se</h1>

        <form onSubmit={addEmploye}>
            <div>
                <label>
                    Digite o nome:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Digite o email:
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}  />
                </label>
            </div>
            <div>
                <label>
                    Digite a profissão:
                    <input type="text" value={profissao} onChange={(e) => setProfissao(e.target.value)} />
                </label>
            </div>
            <input type="submit"/>
        </form>
        <ListEmployes />
    </div>
  )
}

export default Principal