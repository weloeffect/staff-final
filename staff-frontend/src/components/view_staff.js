import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import "../css/view.css"

const Employee= props =>
 <tr>
   <td>{props.employee.firstname}</td>
    <td>{props.employee.lastname}</td>
    <td>{props.employee.age}</td>
   <td>{props.employee.salary}</td>
    <td>
    <Link className='btn btn-primary me-2 ' to={"/update/"+props.employee._id}>Update </Link><a href="#" className='btn btn-danger ' onClick={() =>{props.deleteEmployee(props.employee._id) }}> Delete</a>
   </td>
 </tr>

export class View_staff extends Component {
  constructor(props){
    super(props);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.state = {staff:[]}
  }
  componentDidMount(){
    axios.get('http://localhost:5000/staff/employees/')
    .then(res=> {
      this.setState({staff: res.data})
    })
    .catch(err => {
      console.log('error')
    })
  }
  deleteEmployee(id){
    axios.delete('http://localhost:5000/staff/employees' + id)
    .then(res => console.log(res.data));

    this.setState({
      staff: this.state.staff.filter(user => user._id !== id)
    })
  }
  staffList(){
    return this.state.staff.map(currentemployee=>{
      return <Employee employee={currentemployee} deleteEmployee={this.deleteEmployee} key={currentemployee._id} />
    })
  }

  render() {
    return (
      <section className='View'>
          <div className=' mt-5 mb-3'>
            <h1 className='ps-2'>Available Employees</h1>
          </div>
          <table className="table table-striped table-hover">
              <thead className="thead-light">
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Salary</th>
                <th className=' ps-5'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.staffList()}
            </tbody>
        </table>
      </section>
    )
  }
}

export default View_staff