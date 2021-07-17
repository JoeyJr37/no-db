import React, { Component } from 'react';
import Form from '../Form/Form';
import './employee.css';
import UpdateForm from '../UpdateForm/UpdateForm';

class Employee extends Component{
    constructor(props){
        super(props)

        this.state = {
            showForm: false,
            showUpdateForm: false,
            text: '',
            updatedBy: '',
            updatedOn: '',
            concernLevel: ''
        }
    }
    
    deleteMe = (id) => {
        console.log(id);
        this.props.updateDisplay('allStaff');
        this.props.deleteMe(id);
    }

    editMe = () => {
        // open form and fill it in with information from this employee
        this.setState({ showForm: true })
    }
    
    closeForm = () => {
        this.setState({ showForm: false })
    }

    showUpdateForm = () => {
        this.setState({ showUpdateForm: true });
    }

    addUpdate = (id, body) => {
        this.setState({ showUpdateForm: false });
        this.props.addUpdate(id, body);
    }

    render(){
        const { info, editEmployee, showEmployee } = this.props;
        
        // const infoUpdates = info.updates.map(update => {
        //     return (
        //         {
        //             text: 'Does not like chicken',
        //             updatedBy: 'JP',
        //             updatedOn: '07-03-2021',
        //             concernLevel: 'moderate'
        //           }
        //     )
        // });

        

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
                {!this.state.showUpdateForm && <button onClick={this.showUpdateForm}> Add Update </button>}
                {this.state.showUpdateForm && <UpdateForm addUpdate={this.addUpdate} id={info.id}/>}
                {info.updates.map((update, i) => {
                    return <div className='personal-update' key={i}>
                            <p>{update.text}</p>
                            <p>Updated By: {update.updatedBy} On {update.updatedOn}</p>
                            <p>Concern level: {update.concernLevel}</p>
                            </div>
                })}
                <button onClick={this.editMe}> EDIT ME </button>
                {this.state.showForm && <Form info={info} submitEmployee={editEmployee} close={this.closeForm} showEmployee={showEmployee}/>}
                <button onClick={() => this.deleteMe(info.id)}> DELETE ME </button>
            </>
        )
    }
}

export default Employee;