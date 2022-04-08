import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { TitleUsers,ContainerUsers, TableUsers } from "./Users.styles";
import moment from "moment";


function Users() {
  const { getUsers, person } = useContext<any>(UserContext)

  useEffect(() => {
    getUsers();
  },[])

  const maskCpf = (cpf: string) => cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
  
  return (
      <ContainerUsers>
       <TitleUsers> Users </TitleUsers> 
       <TableUsers>
         <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>CPF</th>
            <th>DataNascimento</th>
          </tr>
         </thead>
         <tbody>
       {person.map((user: string | any) => (
         <tr key={user.idPessoa}>
           <td>{user.nome}</td>
           <td>{user.email}</td>
           <td>{maskCpf(user.cpf)}</td>
           <td>{moment(user.dataNascimento).format('DD/MM/YYYY')}</td>
         </tr>
       ))}
         </tbody>
       </TableUsers>
      </ContainerUsers>
  )
}

export default Users