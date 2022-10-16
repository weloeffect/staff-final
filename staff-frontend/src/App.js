import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
// import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './components/navbar';
import "bootstrap/dist/css/bootstrap.css"
import Edit_staff from  "./components/edit_staff"
import Add_staff from './components/add_staff';
import View_staff from './components/view_staff';
import Footer from './components/footer';
import Login from './components/login';
import {Helmet} from 'react-helmet'
import Signup from './components/signup';
import RedirectView from './components/RedirectView';
import RedirectLogin from './components/RedirectLogin';
function App() {
  // const { user } = useAuthContext();
 
  return (
    <div className='Main'>
      
      <Helmet>
        <title>Manage Your Employees</title>
      </Helmet>
    
    <Router>
      <Navbar />
        <Route path="/"  exact component= {Login} />
        <Route path="/signup"  exact component={!user ? Signup : RedirectView} />
        <Route path="/view"  component={user ? View_staff : RedirectLogin} />
        <Route path="/update/:id"  component={user ? Edit_staff : RedirectLogin} />
        <Route path="/create"  component={user ? Add_staff : RedirectLogin} />
    </Router>
    <Footer />
    </div>
  );
}

export default App;
