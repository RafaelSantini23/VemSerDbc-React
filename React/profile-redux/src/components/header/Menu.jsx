import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { handleLogout } from '../../store/actions/AuthAction';
import { useNavigate } from 'react-router-dom';

function Menu({auth,dispatch}) {
  const navigate = useNavigate()

  

  return (
    <nav>
        <ul>  
        {
            auth.auth ? (
                <>
                    <Link to='/'> <li>Home</li> </Link> 
                    <Link to='/profile'> <li>Profile</li> </Link> 
                    <button type='button' onClick={() => handleLogout(dispatch, navigate('/login')) }> Logout </button>  
                
                </>
            ) : ''
        }
        </ul>
    </nav>
  )
}

const mapStateToProps = (state) => ({
    auth: state.authReducer.auth
})


export default connect(mapStateToProps)(Menu)