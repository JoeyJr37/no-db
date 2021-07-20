import React from 'react';
import Form from '../Form/Form';
import Employee from '../Employee/Employee';
import Staff from '../Staff/Staff';
import Updates from '../Updates/Updates';

const Body = ({display, data, showEmployee, updateDisplay, updateFunctions, employeeFunctions}) => {

    const sharedProps = { data, showEmployee };

    return(
        <>
        {display.showForm && <Form submitEmployee={employeeFunctions.add}/>}
        
        {display.allStaff && <Staff {...sharedProps} showForm={updateDisplay}/>}

        {display.updates && <Updates {...sharedProps} />}

        {display.employee !== -1 && <Employee {...sharedProps}
            id={display.employee} employeeFunctions={employeeFunctions} updateFunctions={updateFunctions}
            updateDisplay={updateDisplay}  />}
        </>
    )
}

export default Body;