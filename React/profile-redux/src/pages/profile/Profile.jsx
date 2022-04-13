import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { isAuth } from "../../store/actions/AuthAction";

function Profile({ auth, dispatch }) {

  const navigate = useNavigate()
        
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
        navigate('/login')
      } 
    }, [])


  return (
    <div>Profile</div>
  )
}
const mapStateToProps = (state) => ({
    auth: state.authReducer.auth
})


export default connect(mapStateToProps)(Profile)