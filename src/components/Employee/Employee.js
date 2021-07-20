import React, { Component } from 'react';
import Form from '../Form/Form';
import './employee.css';
import UpdateForm from '../UpdateForm/UpdateForm';
import Update from '../Update/Update'

class Employee extends Component{
    constructor(props){
        super(props)

        this.state = {
            showForm: false,
            showUpdateForm: false,
            updateData: {},
            info: {},
            edit: false,
        }
    }

    deleteMe = (id) => {
        // console.log(id);
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

    closeUpdateForm = () => {
        this.setState({ showUpdateForm: false });
    }

    showUpdateForm = () => {
        this.setState({ showUpdateForm: true });
    }

    addUpdate = (id, body) => {
        this.closeUpdateForm();
        this.props.addUpdate(id, body);
    }
    
    editUpdate = (update) => {
        this.setState({ updateData: update, edit: true});
        this.showUpdateForm();
    }

    submitUpdate = (id, body) => {
        this.closeUpdateForm();
        this.props.editUpdate(id, body);
    }

    deleteUpdate = (updateId) => {
        this.props.deleteUpdate(this.props.info.id, updateId);
    }

    editReset = () => {
        this.setState({ edit: false});
    }

    formatInfo = () => {
        const { data, id } = this.props;
        const index = data.findIndex(e => e.id === id);
        const info = data[index];
        return info;
    }
    componentDidMount(){
        const info = this.formatInfo();
        this.setState({ info });
    }

    componentDidUpdate(prevProps){
        if (prevProps.data !== this.props.data){
            const info = this.formatInfo();
            this.setState({ info });
        }
    }

    render(){

        const { editEmployee, showEmployee } = this.props;
        const { info, updateData, edit } = this.state;

        if (info.first_name === undefined){
            return <h2>Loading...</h2>
        }
        
            return(
                <div className='employee'>  
                    <div className='personal-info'>
                    {this.state.showForm && <Form info={info} submitEmployee={editEmployee} close={this.closeForm} showEmployee={showEmployee}/>}
                        <button onClick={this.editMe}> EDIT ME </button>
                        <button onClick={() => this.deleteMe(info.id)}> DELETE ME </button>
                        <h2>{info.first_name} {info.last_name}</h2>
                        <img src={info.picture} alt='profile-img' className='profile-img' />
                        <h3> Location: {info.city}, {info.country} </h3>
                        <h3> Phone: {info.phone} </h3>
                        <h3> Email: {info.email} </h3>
                        <h3> Mentor: {info.mentor} </h3>
                        <h3> Position: {info.position} </h3>
                        <h3> Birth Date: {info.birth_date} </h3>
                    </div>
                    <div className='updates'>
                        {!this.state.showUpdateForm && <button onClick={this.showUpdateForm}> Add Update </button>}
                        {this.state.showUpdateForm && <UpdateForm addUpdate={this.addUpdate} 
                            editUpdate={this.submitUpdate} id={info.id} info={updateData} 
                            edit={edit} editReset={this.editReset} closeForm={this.closeUpdateForm}/>}
                        {info.updates.map((update, i) => {
                            return <Update key={i} update={update} editUpdate={this.editUpdate} deleteUpdate={this.deleteUpdate} />
                        })}
                    </div>
                </div>
            )        
    }
}

export default Employee;