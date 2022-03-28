import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Users() {
    const navigation = useNavigate();
    const { handleLogout } = useContext(AuthContext)

    useEffect(() => {
      const token = localStorage.getItem('token')
      if(!token) {
        navigation('/login')
      }  
    })
  return (
      <div>
          <h1>Users</h1>
          <button onClick={handleLogout}>Logout</button>
      </div>
  )
}

export default Users;
