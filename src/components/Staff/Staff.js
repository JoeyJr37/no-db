import React, { Component } from 'react';
import StaffCard from '../StaffCard/StaffCard';
import './staff.css';

class Staff extends Component{
    constructor(props){
        super(props)

        this.state = {
            formattedData: [],
        }
    }

    formatData = (data) => {
        // format data for Staff feed
        
        const formattedData = data.map(obj => {
          return {
            id: obj.id, 
            picture: obj.picture, 
            first_name: obj.first_name, 
            last_name: obj.last_name, 
            city: obj.city, 
            country: obj.country
          }
        })
        this.setState({ formattedData })
      }

      componentDidMount(){
        const { data } = this.props;
        this.formatData(data);
    }

      render(){
          const { showEmployee, showForm } = this.props;
          const { formattedData } = this.state;
      
          return (
                <div className='staff-feed'>
                    <button className='add-staff-btn' onClick={()=>showForm('showForm')}>ADD EMPLOYEE</button>
                    {formattedData.map((employee, i) => {
                        return <StaffCard key={i} data={employee} showEmployee={showEmployee}/>
                    })}
                </div>
            )
        }
    }
export default Staff;