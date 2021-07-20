import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      display: {
        employee: -1,
        allStaff: true,
        updates: false,
        showForm: false
      },
      allDataArray: [],
      allStaffArray: [],
      updatesArray: []
    }
  }

  reset = () => {
    const display = Object.assign({}, this.state.display);

    for (const key in display){
      display[key] = false;
      display.employee = -1;
    };

    return display;
  }

  updateDisplay = (val) => {
    const display = this.reset();
    display[val] = true;
    this.setState({ display })
  }

  showEmployee = (val) => {
    const display = this.reset();
    display.employee = val;
    this.setState({ display })
  }
  
  componentDidMount(){
    // console.log(this.state.allDataArray.data);
    axios.get('/api/employees')
      .then(res => {
        this.setState({ allDataArray: res.data });
        })
      .catch(err => console.log(err));
  }

  addEmployee = (body) => {
    // post request
    axios.post('/api/employees', body)
    .then(res => {
      this.setState({ allDataArray: res.data });
      this.updateDisplay('allStaff')})
      .catch(err => console.log(err))
  }

  updateEmployee = (body, id) => {
    console.log({body}, {id});
    // put request
    axios.put(`/api/employees/${id}`, body)
      .then(res => {
        this.setState({ allDataArray: res.data });
        this.showEmployee(id);
      })
      .catch(err => console.log(err));
    
  }

  deleteEmployee = (id) => {
    // delete request
    axios.delete(`api/employees/${id}`)
      .then(res => {
        this.setState({ allDataArray: res.data });
      })
      .catch(err => console.log(err));
  }

  addUpdate = (id, body) => {
    // post request
    // employee id & update body
    axios.post(`/api/employees/${id}`, body)
      .then(res => {
        this.setState({ allDataArray: res.data });
      })
      .catch(err => console.log(err));
  }

  editUpdate = (id, body) => {
    // put request
    axios.put(`/api/employees/updates/${id}`, body)
    .then(res => {
      this.setState({ allDataArray: res.data });
    })
    .catch(err => console.log(err));
  }

  deleteUpdate = (employeeId, updateId) => {
    // delete request
    axios.delete(`/api/employees/updates/${employeeId}/${updateId}`)
      .then(res => {
        this.setState({ allDataArray: res.data });
      })
      .catch(err => console.log(err));
  }

  render(){

    const { display } = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1> HR Assist </h1>
        </header>
        <Header handleClick={this.updateDisplay}/>
        <Body display={display} data={this.state.allDataArray} 
          showEmployee={this.showEmployee} updateDisplay={this.updateDisplay} addEmployee={this.addEmployee} 
          deleteEmployee={this.deleteEmployee} editEmployee={this.updateEmployee} addUpdate={this.addUpdate}
          editUpdate={this.editUpdate} deleteUpdate={this.deleteUpdate}/>
      </div>
    )
  }
}

export default App;
