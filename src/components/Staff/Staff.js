import React from 'react';
import Card from '../Card/Card';
import './staff.css';

const Staff = ({display, data, showEmployee}) => {
    
    return (
        <div className='staff-feed'>
            <button className='add-staff-btn'>ADD EMPLOYEE</button>
        {data.map((employee, i) => {
            return <Card key={i} data={employee} display={display} showEmployee={showEmployee}/>
        })}
        </div>
    )
}

export default Staff;