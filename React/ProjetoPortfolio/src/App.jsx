import { useState } from 'react';
// import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from 
'react-router-dom';
import Header from './components/header/Header';
import Perfil from './pages/perfil/Perfil';
import Repo from './pages/repo/Repo';
import Contato from './pages/contato/Contato';


import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Perfil />} />
        <Route path='/repo' element={<Repo />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;
