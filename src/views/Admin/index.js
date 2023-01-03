import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/login");
  };

  return (
    <div>
      <h2>Admin</h2>
      <button onClick={logOut}> Logout </button>
    </div>
  )
}
