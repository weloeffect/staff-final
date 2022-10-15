import React, { Component } from 'react'
import {useLogout} from '../hooks/useLogout';
// import { useAuthContext } from '../hooks/useAuthContext';
import {Link} from 'react-router-dom'
import "../css/navbar.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useHistory } from 'react-router-dom';

function Navbar() {
  const {logout} = useLogout();
  // const {user} = useAuthContext();
  const history = useHistory();

  function HandleLogout(){
    logout();
    history.push('/')
  }
    return (
      <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">  
          <img src="https://yenettacode.com/wp-content/uploads/2022/04/YenettaWebBlack-2.png" alt="default pic"  className='logo navbar-brand'/> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id='navbar'>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <Link to="/view" className='nav-link ms-2'>View Employees</Link>
                  </li>
              </ul>
            <div class="d-flex">
              <Link to="/create" className='btn btn-success me-2'>
              Add Employee
              <AddCircleIcon className='ms-2' />
              </Link>
              <div>
                  <button onClick={HandleLogout} className="btn btn-danger me-2">Logout</button>
              </div>
          </div>
          </div>
        </nav>
      </>
    )
  }


export default Navbar