import React from 'react';
import StaffCard from '../StaffCard/StaffCard';

const StaffList = ({ data, showEmployee }) => {

    const nameSort = (a, b) => {
        if (a.last_name > b.last_name){
            return 1;
        } else if (a.last_name < b.last_name){
            return -1;
        } else {
            return 0;
        }
    }

    return (
        data.sort(nameSort).map((employee, i) => {
            return <StaffCard key={i} data={employee} showEmployee={showEmployee}/>
        })
    )
}

export default StaffList;