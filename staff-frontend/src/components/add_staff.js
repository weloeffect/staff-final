import React, { Component } from 'react'
import "../css/add.css"
import {Helmet} from "react-helmet"
import axios from "axios"
export class Add_staff extends Component {
    constructor(props){
        super(props);
        this.FirstnameInputChange = this.FirstnameInputChange.bind(this);
        this.LastnameInputChange = this.LastnameInputChange.bind(this);
        this.AgeInputChange = this.AgeInputChange.bind(this);
        this.SalaryInputChange = this.SalaryInputChange.bind(this);
        this.HandleSubmit =  this.HandleSubmit.bind(this);
        this.state = {
            firstname :'',
            lastname: '',
            age: null,
            salary: null,
            staff_firstname: [],
            staff_lastname: [],
        }
     
    }
    
    FirstnameInputChange = (e) => {
      this.setState({
        firstname: e.target.value
      })
  }
  LastnameInputChange = (e) => {
    this.setState({
      lastname: e.target.value
    })
  }
  AgeInputChange = (e) => {
    this.setState({
      age: e.target.value
    })
  }
  SalaryInputChange = (e) => {
    this.setState({
      salary: e.target.value
    })
  }
  HandleSubmit = (e) =>{
    e.preventDefault();

    const staff = {
      firstname :this.state.firstname,
      lastname :this.state.lastname,
      age :this.state.age,
      salary :this.state.salary,
      staff_firstname: [],
      staff_lastname: [],
  }
  console.log(staff)
      axios.post('http://localhost:5000/staff/create', staff)
      .then(res => console.log(res.data))
  
      window.location = '/view'

  }

  render() {
    return (
      <section className='Add' >
      <Helmet>
        <title>Add an  Employee</title>
      </Helmet>
    <form  onSubmit={this.HandleSubmit}>
      <h2 >Add a new Employee</h2>
    <div className="mb-3 mt-4">
    <label for="firstname" className="form-label">First Name</label>
    <input type="text" value={this.state.firstname} className="form-control" id="firtname" onChange={this.FirstnameInputChange} required/>
  </div>
  <div className="mb-3">
    <label for="lastname" className="form-label">Last Name</label>
    <input type="text" value={this.state.lastname} className="form-control" id="lastname" onChange={this.LastnameInputChange} required/>
  </div>
  <div className="mb-3">
    <label for="age" className="form-label">Age</label>
    <input type="number" value={this.state.age} className="form-control" id="age" onChange={this.AgeInputChange} required/>
  </div>
  <div className="mb-3">
    <label for="salary" className="form-label">Salary</label>
    <input type="number" value={this.state.salary} className="form-control" id="salary" onChange={this.SalaryInputChange} required/>
  </div>
  <div className='text-center'>
  <button type="submit" className="btn btn-primary btn-lg w-50 ">Submit</button>
  </div>
    </form>
    </section>
    )
  }
}

export default Add_staff