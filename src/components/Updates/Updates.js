import React from 'react';
import Card from '../Card/Card';

const Updates = ({ data, showEmployee}) => {

    return(
        <>
        {data.map((obj, i) => {
            return <Card key={i} data={obj} showEmployee={showEmployee}/>
        })}
        
        </>
    )
}

export default Updates;