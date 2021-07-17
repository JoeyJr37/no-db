import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      display: {
        employee: -1,
        allStaff: false,
        updates: false,
        showForm: false
      },
      allDataArray: [],
      allStaffArray: [],
      updatesArray: []
    }
  }




  render(){
    return (
      <div className='App'>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default App;
