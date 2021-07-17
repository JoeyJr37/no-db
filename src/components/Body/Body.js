import React from 'react';
import Form from '../Form/Form'
import Employee from '../Employee/Employee'
import Feed from '../Feed/Feed'

const Body = ({display, data, allStaff, newsFeed, showEmployee, updateDisplay, addEmployee, deleteEmployee}) => {

    let info = [];
    console.log(display.employee);

    if (display.employee !== -1){
        const index = data.findIndex(e => e.id === display.employee);
        info = data[index];
    }


    return(
        <>
        {display.showForm && <Form addEmployee={addEmployee}/>}
        {display.allStaff && <Feed display={display} data={allStaff} showEmployee={showEmployee} showForm={updateDisplay}/>}
        {display.updates && <Feed display={display} data={newsFeed} showEmployee={showEmployee}/>}
        {display.employee !== -1 && <Employee info={info} deleteMe={deleteEmployee} updateDisplay={updateDisplay}/>}
        </>
    )
}

export default Body;