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
        this.formatAllStaffArray(res.data);
        this.formatNewsFeedArray(res.data); })
      .catch(err => console.log(err));
  }

  addEmployee = (body) => {
    // post request
    axios.post('/api/employees', body)
    .then(res => {
      this.setState({ allDataArray: res.data });
      this.formatAllStaffArray(res.data);
      this.formatNewsFeedArray(res.data); 
      this.updateDisplay('allStaff')})
      .catch(err => console.log(err))
    // console.log(body);
  }

  updateEmployee = () => {
    // put request
  }

  deleteEmployee = (id) => {
    // delete request
    axios.delete(`api/employees/${id}`)
    .then(res => {
      this.setState({ allDataArray: res.data });
      this.formatAllStaffArray(res.data);
      this.formatNewsFeedArray(res.data); 
      this.updateDisplay('allStaff');
      })
      .catch(err => console.log(err))

      // console.log(id);
  }

  formatAllStaffArray = (data) => {
    // format data for Staff feed
    
    const allStaffArray = data.map(obj => {
      return {
        id: obj.id, 
        picture: obj.picture, 
        first_name: obj.first_name, 
        last_name: obj.last_name, 
        city: obj.city, 
        country: obj.country
      }
    })
    this.setState({ allStaffArray })
  }

  formatNewsFeedArray = (data) => {
    // format data for NewsFeed
    
    const updatesArray = data.map(obj => {
      return {
        id: obj.id,
        picture: obj.picture,
        first_name: obj.first_name,
        last_name: obj.last_name,
        updates: [ {
          text: 'Considering applying for a promotion',
          updatedBy: 'JP',
          updatedOn: '07-07-2021',
          concernLevel: 'none'
        }, {
          text: 'Recently hired on 07-01-2021',
          updatedBy: 'JP',
          updatedOn: '07-01-2021',
          concernLevel: 'none'
        }, {
          text: 'Does not like chicken',
          updatedBy: 'JP',
          updatedOn: '07-03-2021',
          concernLevel: 'moderate'
        }]
      }
    })
    // add logic here to sort this array by updatedOn property
    this.setState({ updatesArray })
  }

  addUpdate = () => {
    // post request
  }

  editUpdate = () => {
    // put request
  }

  deleteUpdate = () => {
    // delete request
  }

  render(){
    const { display, allStaffArray, updatesArray } = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1> HR Assist </h1>
        </header>
        <Header handleClick={this.updateDisplay}/>
        <Body display={display} data={this.state.allDataArray} allStaff={allStaffArray} newsFeed={updatesArray} 
          showEmployee={this.showEmployee} updateDisplay={this.updateDisplay} addEmployee={this.addEmployee} 
          deleteEmployee={this.deleteEmployee}/>
      </div>
    )
  }
}

export default App;
