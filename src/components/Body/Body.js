import React from 'react';
import Form from '../Form/Form';
import Employee from '../Employee/Employee';
import Staff from '../Staff/Staff';
import Updates from '../Updates/Updates';


const Body = ({display, data, showEmployee, updateDisplay, addEmployee, 
        deleteEmployee, editEmployee, addUpdate, editUpdate, deleteUpdate}) => {

    return(
        <>
        {display.showForm && <Form submitEmployee={addEmployee}/>}
        {display.allStaff && <Staff data={data} showEmployee={showEmployee} showForm={updateDisplay}/>}
        {display.updates && <Updates data={data} display={display} showEmployee={showEmployee} />}
        {display.employee !== -1 && <Employee id={display.employee} data={data} deleteMe={deleteEmployee} 
            updateDisplay={updateDisplay} editEmployee={editEmployee} showEmployee={showEmployee}
            addUpdate={addUpdate} editUpdate={editUpdate} deleteUpdate={deleteUpdate}/>}
        </>
    )
}

export default Body;