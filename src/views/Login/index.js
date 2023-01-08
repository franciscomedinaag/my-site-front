import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import authContext from '../../context/auth';

export default function Login() {
  const { logIn } = useContext(authContext);
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
    logIn(registerValues).then((response)=>{
      if ( response === "OK" ) navigate("/admin")
      else generateError(response)
    })
  }

  return (
    <div className='container'>
      <h2>Login</h2>
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
          No account? <Link to="/register">Register</Link>
        </span>
      </form>
      <ToastContainer/>
    </div>
  );
}
