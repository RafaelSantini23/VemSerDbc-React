import logo from './logo.svg';
import Login from './pages/Login';
import Users from './pages/Users';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
