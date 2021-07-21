import React from 'react';
import Card from '../Card/Card';

const UpdateList = ({ updateArray, showEmployee }) => {
    return (
            updateArray.map((obj, i) => {
                return <Card key={i} data={obj} showEmployee={showEmployee}/>
            })
        )
}

export default UpdateList;