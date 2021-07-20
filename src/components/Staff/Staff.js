import React from 'react';
import StaffCard from '../StaffCard/StaffCard';
import './staff.css';

const Staff = ({ data, showEmployee, showForm }) => {
    return(
        <div className='staff-feed'>
            <button className='add-staff-btn' onClick={()=>showForm('showForm')}>ADD EMPLOYEE</button>
            {data.map((employee, i) => {
                return <StaffCard key={i} data={employee} showEmployee={showEmployee}/>
            })}
        </div>
    )
}
export default Staff;