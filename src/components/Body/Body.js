import React from 'react';
import Form from '../Form/Form'
import Employee from '../Employee/Employee'
import Feed from '../Feed/Feed'

const Body = ({display, data, allStaff, newsFeed, showEmployee, updateDisplay, addEmployee, 
        deleteEmployee, editEmployee, addUpdate}) => {

    let info = [];

    if (display.employee !== -1){
        const index = data.findIndex(e => e.id === display.employee);
        info = data[index];
    }


    return(
        <>
        {display.showForm && <Form submitEmployee={addEmployee}/>}
        {display.allStaff && <Feed display={display} data={allStaff} showEmployee={showEmployee} showForm={updateDisplay}/>}
        {display.updates && <Feed display={display} data={newsFeed} showEmployee={showEmployee}/>}
        {display.employee !== -1 && <Employee info={info} deleteMe={deleteEmployee} 
            updateDisplay={updateDisplay} editEmployee={editEmployee} showEmployee={showEmployee}
            addUpdate={addUpdate} />}
        </>
    )
}

export default Body;