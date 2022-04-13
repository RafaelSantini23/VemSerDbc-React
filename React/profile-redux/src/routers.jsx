import { connect } from 'react-redux';
import { useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import { apiAuth } from './api';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import { isAuth } from './store/actions/AuthAction';
import {useNavigate} from 'react-router-dom'
import NotFound from './pages/notFound/NotFound';

function Routers({auth, dispatch}) {
  useEffect(() => {
      const token = localStorage.getItem('token');
      
      if(token) {
          apiAuth.defaults.headers.common['Authorization'] = token;
          isAuth(dispatch)
      }
      
  }, [])

  

  return (
    <BrowserRouter>
     <Header />
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
    auth: state.authReducer.auth
})

export default connect(mapStateToProps)(Routers);