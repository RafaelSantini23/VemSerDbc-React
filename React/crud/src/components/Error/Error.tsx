import ErrorApi from '../../imgs/Error.gif'
import { Container } from './Error.styles'

function Error({widthImg}: {widthImg: string}) {
  return (
    <Container>
        <img src={ErrorApi} width={widthImg}  alt="" />
    </Container>
  )
}
export default Error