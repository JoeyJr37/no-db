import React from 'react';
import Card from '../Card/Card';

const Staff = ({display, data, showEmployee}) => {
    
    return (
        <>
        {data.map((employee, i) => {
            return <Card key={i} data={employee} display={display} showEmployee={showEmployee}/>
        })}
        </>
    )
}

export default Staff;