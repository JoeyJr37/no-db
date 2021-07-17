import React, { Component } from 'react';

class Employee extends Component{
    constructor(props){
        super(props)

        this.state = {
            input: '',
        }
    }
    
    deleteMe = (id) => {
        this.props.updateDisplay('allStaff');
        this.props.deleteMe(id);
    }

    render(){
        const { info } = this.props;
        const infoUpdates = info.updates.map(update => {
            return (
                {
                    text: 'Does not like chicken',
                    updatedBy: 'JP',
                    updatedOn: '07-03-2021',
                    concernLevel: 'moderate'
                  }
            )
        });

        

        return(
            <>  
                <h2>{info.first_name} {info.last_name}</h2>
                <img src={info.picture} alt='profile-img' className='profile-img' />
                <h3> Location: {info.city}, {info.country} </h3>
                <h3> Phone: {info.phone} </h3>
                <h3> Email: {info.email} </h3>
                <h3> Mentor: {info.mentor} </h3>
                <h3> Position: {info.position} </h3>
                <h3> Birth Date: {info.birth_date} </h3>
                {infoUpdates.map((update, i) => {
                    return <div className='personal-update' key={i}>
                            <p>{update.text}</p>
                            <p>Updated By: {update.updatedBy} On {update.updatedOn}</p>
                            <p>{update.concernLevel}</p>
                            </div>
                })}
                <button> EDIT ME </button>
                <button onClick={() => this.deleteMe(info.id)}> DELETE ME </button>
            </>
        )
    }
}

export default Employee;