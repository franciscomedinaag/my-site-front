import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import env from "react-dotenv";

export default function Register() {
  const [registerValues, setRegisterValues] = useState({
    email:"",
    password:""
  });

  const navigate = useNavigate();

  const generateError = (err) => 
  toast.error(err, {
    position:"bottom-right"
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.post(
        `${env.API_URL}/auth/register`, 
        {
          ...registerValues
        },
        {
          withCredentials: true
        }
      );

      if(data){
        if(data.errors){
          const {email, password} = data.errors;
          if(email) generateError(email);
          else if(password) generateError(password)
        } else {
          navigate("/admin");
        }
      }

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='container'>
      <h2>Register</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label htmlFor='email'>Email</label>
          <input 
            type='email' 
            name='email' 
            placeholder='Email'
            onChange={(e) => 
              setRegisterValues({...registerValues, [e.target.name]:e.target.value})
            } 
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input 
            type='password' 
            name='password' 
            placeholder='Password'
            onChange={(e) => 
              setRegisterValues({...registerValues, [e.target.name]:e.target.value})
            } 
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer/>
    </div>
  );
}
