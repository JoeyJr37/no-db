import React from 'react';
import StaffCard from '../StaffCard/StaffCard';

const StaffList = ({ data, showEmployee }) => {
    return (
        data.map((employee, i) => {
            return <StaffCard key={i} data={employee} showEmployee={showEmployee}/>
        })
    )
}

export default StaffList;