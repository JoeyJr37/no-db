import React from 'react';
import './card.css';

const Card = ({data, showEmployee}) => {

        const formatDate = () => {
            const updatedOn = data.updated_on.split('T')[0];
            return updatedOn;
        }
        const formattedDate = formatDate();

        return (

                <div className='updates-card' onClick={()=>showEmployee(data.id)}>
                    
                    <div className='update-info'>
                        {/* <img src={data.picture} alt='profile-img' className='update-img' /> */}
                        <h5 className='update-name'>{data.first_name} {data.last_name} </h5>
                    </div>

                    <div className='update-section'>
                        <div className={`concern-level ${data.concern_level === 'low' ? 'low' : ""}
                            ${data.concern_level === 'medium' ? 'medium' : ""}
                            ${data.concern_level === 'high' ? 'high' : ""}`}> <span>{data.concern_level}</span></div>
                        <div className='update-details'>
                            <p className='update-text'> {data.message_text} </p>
                            <h6 className='update-author'> Updated By: {data.updated_by} on {formattedDate} </h6>
                        </div>
                    </div>
                </div>
            
            )
    }

export default Card;
