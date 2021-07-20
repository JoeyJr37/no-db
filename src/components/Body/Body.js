import React from 'react';
import Form from '../Form/Form';
import Employee from '../Employee/Employee';
import Staff from '../Staff/Staff';
import Updates from '../Updates/Updates';


const Body = ({display, data, newsFeed, showEmployee, updateDisplay, addEmployee, 
        deleteEmployee, editEmployee, addUpdate, editUpdate, deleteUpdate}) => {

    let info = [];

    if (display.employee !== -1){
        const index = data.findIndex(e => e.id === display.employee);
        info = data[index];
    }


    return(
        <>
        {display.showForm && <Form submitEmployee={addEmployee}/>}
        {display.allStaff && <Staff data={data} showEmployee={showEmployee} showForm={updateDisplay}/>}
        {display.updates && <Updates data={newsFeed} display={display} showEmployee={showEmployee} />}
        {display.employee !== -1 && <Employee info={info} deleteMe={deleteEmployee} 
            updateDisplay={updateDisplay} editEmployee={editEmployee} showEmployee={showEmployee}
            addUpdate={addUpdate} editUpdate={editUpdate} deleteUpdate={deleteUpdate}/>}
        </>
    )
}

export default Body;