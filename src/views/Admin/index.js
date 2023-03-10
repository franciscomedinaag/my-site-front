import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import authContext from '../../context/auth';
import { toast, ToastContainer } from 'react-toastify';

export default function Admin() {
  const { checkAuth, logOut} = useContext(authContext);
  const navigate = useNavigate();

  useEffect(()=>{
    doCheckAuth();
  }, [])

  const doCheckAuth = () => {
    checkAuth().then((isAuth)=>{
      if(!isAuth) navigate("/login")
    })
  };

  const doLogOut = async () => {
    if(logOut()) navigate("/login")
  };
  
  return (
    <>
      <div>
        <h2>Admin</h2>
        <button onClick={doLogOut}> Logout </button>
      </div>
      <ToastContainer/>
    </>
  )
}
