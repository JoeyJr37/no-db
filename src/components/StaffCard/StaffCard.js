import React from 'react';
import './staffCard.css';

const StaffCard = ({data, showEmployee}) => {
    
        return (
            <div className='staff-card' onClick={()=>showEmployee(data.id)}>
                {/* <img className='profile-img' alt='profile-img' src={data.picture} /> */}
    
                <div className='staff-details'>
                    <h4>{data.first_name} {data.last_name} {data.id}</h4>
                    <h5>{data.city} {data.country}</h5>
                </div>
            </div>
        )
}

export default StaffCard;