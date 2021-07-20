import React from 'react';
import './card.css';

const Card = ({data, showEmployee}) => {

        return (
            data.updates.map((update, i) => {
                return <div className='updates-card' onClick={()=>showEmployee(data.id)}>
                    
                    <div className='update-info'>
                        <img src={data.picture} alt='profile-img' className='update-img' />
                        <h5 className='update-name'>{data.first_name} {data.last_name} </h5>
                    </div>

                    <div className={`update ${update.concernLevel === 'low' ? 'low' : ""}
                        ${update.concernLevel === 'medium' ? 'medium' : ""}
                        ${update.concernLevel === 'high' ? 'high' : ""}`}> Concern level: {update.concernLevel}</div>
                    <p className='update-text'> {update.text} </p>
                    <h6> Updated By: {update.updatedBy} on {update.updatedOn} </h6>
                </div>
                })
            )
    }

export default Card;
