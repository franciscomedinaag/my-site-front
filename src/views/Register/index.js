import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {
  const [registerValues, setRegisterValues] = useState({
    email:"",
    password:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerValues)
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
