import React from 'react';
import './card.css';

const Card = ({data, showEmployee}) => {

        return (

                <div className='updates-card' onClick={()=>showEmployee(data.id)}>
                    
                    <div className='update-info'>
                        <img src={data.picture} alt='profile-img' className='update-img' />
                        <h5 className='update-name'>{data.first_name} {data.last_name} </h5>
                    </div>

                    <div className='update-section'>
                        <div className={`concern-level ${data.concernLevel === 'low' ? 'low' : ""}
                            ${data.concernLevel === 'medium' ? 'medium' : ""}
                            ${data.concernLevel === 'high' ? 'high' : ""}`}> <span>{data.concernLevel}</span></div>
                        <div className='update-details'>
                            <p className='update-text'> {data.text} </p>
                            <h6 className='update-author'> Updated By: {data.updatedBy} on {data.updatedOn} </h6>
                        </div>
                    </div>
                </div>
            
            )
    }

export default Card;
