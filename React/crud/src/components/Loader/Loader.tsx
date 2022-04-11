import loading from '../../imgs/Loader.gif'
import { Container } from './Loader.styles'

function Loader({height}: {height?: string}) {
  return (
    <Container>
        <div>
            <img src={loading} width='130px' height={height} alt="loading" />
        </div>
    </Container>
  )
}
export default Loader;