import { 
    Card,
    Container,
    CardTitle
} from "./Home.styles"

function Home() {
  return (
    <div>
        <Container>
            <Card>
              <CardTitle>Users</CardTitle>
            </Card>
            <Card> 
              <CardTitle>Address</CardTitle>
            </Card>
        </Container>
    </div>
  )
}

export default Home