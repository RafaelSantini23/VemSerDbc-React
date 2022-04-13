import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../../store/actions/AuthAction";

function Home({auth,dispatch}) {
    const navigate = useNavigate()
        
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            navigate('/')
            isAuth(dispatch)
        } else {
            navigate('/login')
        }
    }, [])


  return (
    <div>Home</div>
  )
}

const mapStateToProps = (state) => ({
    auth: state.authReducer.auth
})

export default connect(mapStateToProps)(Home);