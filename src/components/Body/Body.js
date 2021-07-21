import React from 'react';
import Employee from '../Employee/Employee';
import StaffListContainer from '../StaffList/StaffListContainer';
import UpdateListContainer from '../UpdateList/UpdateListContainer';

const Body = ({display, data, showEmployee, updateDisplay, updateFunctions, employeeFunctions}) => {

    const sharedProps = { data, showEmployee };

    return(
        <>
        
        {display.allStaff && <StaffListContainer {...sharedProps} submitEmployee={employeeFunctions.add}/>}

        {display.updates && <UpdateListContainer {...sharedProps} />}

        {display.employee !== -1 && <Employee {...sharedProps}
            id={display.employee} employeeFunctions={employeeFunctions} updateFunctions={updateFunctions}
            updateDisplay={updateDisplay}  />}
        </>
    )
}

export default Body;