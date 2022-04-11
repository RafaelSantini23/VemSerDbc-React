import { Container, NotFoundImg } from './NotFound.styles';
import error from '../../imgs/NotFound.gif';


function NotFound() {
  return (
    <Container>
      <NotFoundImg src={error} width='650px' height='550px' />
    </Container>
  )
}

export default NotFound