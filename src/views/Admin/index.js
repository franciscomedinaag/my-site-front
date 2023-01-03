import axios from 'axios';
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import env from "react-dotenv";

export default function Admin() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  useEffect(()=>{
    const verifyUser = async () => {
      if(!cookies.jwt){
        navigate("/login");
      } else {
        const { data } = await axios.post(
          `${env.API_URL}/auth/checkUser`,
          {},
          {withCredentials:true}
        );
        if(!data.status){
          removeCookie("jwt");
          navigate("/login");
        } else{
          toast(`Hello ${data.user}`, {theme:"dark"})
        }
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie])

  const logOut = () => {
    removeCookie("jwt")
    navigate("/login");
  };

  return (
    <>
      <div>
        <h2>Admin</h2>
        <button onClick={logOut}> Logout </button>
      </div>
      <ToastContainer/>
    </>
  )
}
