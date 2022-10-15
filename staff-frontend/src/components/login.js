import React, { useState } from 'react'
import "../css/id.css"
import ErrorIcon from '@mui/icons-material/Error';
import { Link } from 'react-router-dom';
import { login } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const {login, isLoading, error} = useLogin();
 
  const dispatch = useDispatch();
  

  async function HandleSubmit(event){
    const data = {
      email,
      password
    }
    // window.alert('user logged in  sucessfully')
    // await login(email, password)
    event.preventDefault();
    console.log(data);
    dispatch(login(data));

  }
  return (
    <section className='Login'>
     <div className='login-header'>
      <img src="https://yenettacode.com/wp-content/uploads/2022/04/YenettaWebBlack-2.png" alt="" className='logo'/>
     </div>
     <div className='mt-5 login-container'>
      <div className='text-start'>
        <h2>Login</h2>
      </div>
      <div>
      <form onSubmit={HandleSubmit}>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder='xoxo@example.com' onChange={(e) => setEmail(e.target.value)} value={email}/>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
           <input type="password" class="form-control" id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <div className='text-center mt-5'>
          <button type='submit' class="btn btn-primary w-75 btn-lg" value="Submit" >Submit</button>
          <div className='mt-3'>
            Not a registered user?<Link to="/signup">click here</Link> 
          </div>
          {/* {error && <div className='error mt-3'><ErrorIcon/> {error}</div>} */}
          </div>
     </form>
  </div>
     </div>
    </section>
  )
}

export default Login