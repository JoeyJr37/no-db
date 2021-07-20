import React from 'react';
import Card from '../Card/Card';

const Updates = ({ data, showEmployee}) => {

    /** Format data for update array in prepartion for sorting */

    const updateArray = data.flatMap((obj, i) => {
            return obj.updates.map(update => {
                return {
                    id: obj.id,
                    picture: obj.picture,
                    first_name: obj.first_name,
                    last_name: obj.last_name,
                    text: update.text,
                    updatedBy: update.updatedBy,
                    updatedOn: update.updatedOn,
                    concernLevel: update.concernLevel
                }
            })
    })

    // console.log(updateArray);
    
    /* Sort update array by date */
    updateArray.sort((a, b) => {
        const aDate = new Date(a.updatedOn);
        const bDate = new Date(b.updatedOn);
        return bDate - aDate }
        );
        
    // console.log(updateArray);

    return(
        <>
        {updateArray.map((obj, i) => {
            return <Card key={i} data={obj} showEmployee={showEmployee}/>
        })}
        
        </>
    )
}

export default Updates;