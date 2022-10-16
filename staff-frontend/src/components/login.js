import React, { useState } from 'react'
import "../css/id.css"
import ErrorIcon from '@mui/icons-material/Error';
import { Link} from 'react-router-dom';

import { useLogin } from '../hooks/useLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, isLoading, error} = useLogin();
 

  

  async function HandleSubmit(e){
    const data = {
      email,
      password
    }
    e.preventDefault();
    await login(email, password)
    // window.alert('user logged in  sucessfully')
    
    console.log(data);
    
   

  }
  return (
    <section className='Login'>
     <div className='login-header'>
      {/* <img src="https://yenettacode.com/wp-content/uploads/2022/04/YenettaWebBlack-2.png" alt="" className='logo'/> */}
      <img src="https://cdn-icons-png.flaticon.com/128/4598/4598130.png" alt="" className='logo'/>
      
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
          <button type='submit' class="btn btn-primary w-75 btn-lg" value="Submit" disabled={isLoading} >Submit</button>
          <div className='mt-3'>
            Not a registered user?<Link to="/signup">click here</Link> 
          </div>
          {error && <div className='error mt-3'><ErrorIcon/> {error}</div>}
          </div>
     </form>
  </div>
     </div>
    </section>
  )
}

export default Login