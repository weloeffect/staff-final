import React, { Component } from 'react'
import "../css/edit.css"
import {Helmet} from "react-helmet"
import axios from "axios"
export class Edit_staff extends Component {
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
            staff: [],
        }

    }
    componentDidMount(){
        axios.get('http://localhost:5000/staff/employees/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                firstname:response.data.firstname,
                lastname:response.data.lastname,
                age:response.data.age,
                salary:response.data.salary, 
              })
            })
            .catch(function(error){
                console.log(error);
             })
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
      staff:[]
  }
  console.log(staff)
      axios.put('http://localhost:5000/staff/update/' + this.props.match.params.id, staff)
      .then(res => console.log(res.data))
      window.location = '/view'
  }
  render() {
    return (
        <section className='Edit' >
        <Helmet>
                <title>Edit an Employee</title>
        </Helmet>
        <h2>Edit an existing Employee</h2>
    <form action="" onSubmit={this.HandleSubmit}>
      <div className="mb-3 mt-4">
        <label for="firstname" className="form-label">First Name</label>
        <input type="text" className="form-control" id="firtname" value={this.state.firstname} onChange={this.FirstnameInputChange} required/>
      </div>
      <div className="mb-3">
        <label for="lastname" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastname" value={this.state.lastname} onChange={this.LastnameInputChange} required/>
      </div>
      <div className="mb-3">
        <label for="age" className="form-label">Age</label>
        <input type="number" className="form-control" id="age" value={this.state.age} onChange={this.AgeInputChange} required/>
      </div>
      <div className="mb-4">
        <label for="salary" className="form-label">Salary</label>
        <input type="number" className="form-control" id="salary" value={this.state.salary} onChange={this.SalaryInputChange} required/>
      </div>
      <div className='text-center mt-3'>
        <button type="submit" className="btn btn-primary btn-lg w-50 ">Update</button>
      </div>
    </form>
    </section>
    )
  }
}

export default Edit_staff