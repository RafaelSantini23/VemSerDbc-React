import { useContext, useEffect } from "react"
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import { AddressContext } from "../../context/AddressContext";
import { UserContext } from "../../context/UserContext"
import { 
    Card,
    Container,
    CardTitle,
    Quantity
} from "./Home.styles"

function Home() {
  const { loadingAddress, errorAddress, address } = useContext<any>(AddressContext)
  const { loadingUsers, person, errorUsers } = useContext<any>(UserContext)
  

  return (
      
        <Container>
            <Card>
              <CardTitle>Users</CardTitle>
              <h2> {errorUsers ? 'Erro ao buscar os dados' : 'Quantidade de usuarios cadastrados:'  } </h2>
              {!errorUsers ? loadingUsers ? <Loader /> : <Quantity>{person.length}</Quantity> : <Error widthImg="120px" />}
              
            </Card>
            <Card> 
              <CardTitle>Address</CardTitle>
              <h2>{errorAddress ? 'Erro ao buscar os dados' : 'Quantidade de endereços cadastrados'}</h2>
              {!errorAddress ? loadingAddress ? <Loader /> : <Quantity>{address.length}</Quantity> : <Error widthImg="120px" />}
              


            </Card>
        </Container>
   
  )
}

export default Home