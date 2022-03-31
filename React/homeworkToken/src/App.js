import Login from './pages/Login';
import Users from './pages/Users';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Address from './pages/Address';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route exact path='/login' element={<Login />}  />
          <Route path='/users' element={<Users />} />
          <Route path='/' element={<Home />} />
          <Route path='/address' element={<Address />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
