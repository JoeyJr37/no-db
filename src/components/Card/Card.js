import React from 'react';
import './card.css';

const Card = ({display, data, showEmployee}) => {
    if (display.allStaff){
        return (
            <div className='staff-card' onClick={()=>showEmployee(data.id)}>
                <img className='profile-img' alt='profile-img' src={data.picture} />
    
                <div className='staff-details'>
                    <h4>{data.first_name} {data.last_name} {data.id}</h4>
                    <h5>{data.city}, {data.country}</h5>
                </div>
            </div>
        )
    } else if (display.updates) {
        return (
            data.updates.map((update, i) => {
                return <div className='updates-card' onClick={()=>showEmployee(data.id)}>
                    
                    <div className='update-info'>
                        <img src={data.picture} alt='profile-img' className='update-img' />
                        <h5 className='update-name'>{data.first_name} {data.last_name} </h5>
                        {/* <span>{update.concernLevel}</span> */}
                    </div>

                    <p className='update-text'> {update.text} </p>
                    <h6> Updated By: {update.updatedBy} on {update.updatedOn} </h6>
                </div>
                })
            )
    }

}

export default Card;
