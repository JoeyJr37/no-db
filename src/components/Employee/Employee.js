import React, { Component } from 'react';
import Form from '../Form/Form';
import './employee.css';
import UpdateForm from '../UpdateForm/UpdateForm';
import Update from '../Update/Update'

class Employee extends Component{
    constructor(props){
        super(props)

        this.state = {
            info: {},
            showForm: false,
            showUpdateForm: false,
            editable: false,
            updatesArray: [],
        }
    }

    toggleEmployeeUpdateForm = () => {
        const { showForm } = this.state;
        if (showForm){
            this.setState({ showForm: false })
        } else {
            this.setState({ showForm: true })
        }
    }

    toggleUpdateForm = () => {
        const { showUpdateForm } = this.state;
        if (showUpdateForm){
            this.setState({ showUpdateForm: false });
        } else {
            this.setState({ showUpdateForm: true });
        }
    }

    deleteEmployee = (id) => {
        // console.log(id);
        this.props.updateDisplay('allStaff');
        this.props.employeeFunctions.delete(id);
    }

    addUpdate = (id, body) => {
        this.toggleUpdateForm();
        this.props.updateFunctions.addUpdate(id, body);
    }
    
    activateEditMode = () => {
        this.setState({ editable: true });
    }

    deleteUpdate = (updateId) => {
        const { id } = this.state.info;
        this.props.updateFunctions.deleteUpdate(id, updateId);
    }

    editUpdate = (id, body) => {
        this.props.updateFunctions.editUpdate(id, body);
    }

    editReset = () => {
        this.setState({ editable: false});
    }

    grabInfo = () => {
        const { data, id } = this.props;
        const index = data.findIndex(e => e.id === id);
        const info = data[index];
        return info;
    }

    formatUpdateInfo = () => {
        const { info } = this.state;
        const updates = info.updates.slice();

        updates.sort((a, b) => {
            const aDate = new Date(a.updatedOn);
            const bDate = new Date(b.updatedOn);
            return bDate - aDate }
        );

        return updates;
    }
    
    componentDidMount(){
        const info = this.grabInfo();
        this.setState({ info });
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.info !== this.state.info){
            const info = this.grabInfo();
            const updatesArray = this.formatUpdateInfo();
            this.setState({ info, updatesArray });
        }
        if (prevProps !== this.props){
            const info = this.grabInfo();
            const updatesArray = this.formatUpdateInfo();
            this.setState({ info, updatesArray });
        }
    }

    render(){
        const { showEmployee } = this.props;
        const { update } = this.props.employeeFunctions;
        const { info, editable, updatesArray } = this.state;

        if (info.first_name === undefined){
            return <h2>Loading...</h2>
        }
        
            return(

                <div className='employee'>  
                    <div className='personal-info'>

                    {this.state.showForm && <Form info={info} submitEmployee={update} 
                        close={this.toggleEmployeeUpdateForm} showEmployee={showEmployee}/>}

                    {!this.state.showForm && 
                        <>                         
                            <button onClick={this.toggleEmployeeUpdateForm}> EDIT ME </button>
                            <button onClick={() => this.deleteEmployee(info.id)}> DELETE ME </button>
                            <h2>{info.first_name} {info.last_name}</h2>
                            <img src={info.picture} alt='profile-img' className='profile-img' />
                            <h3> Location: {info.city}, {info.country} </h3>
                            <h3> Phone: {info.phone} </h3>
                            <h3> Email: {info.email} </h3>
                            <h3> Mentor: {info.mentor} </h3>
                            <h3> Position: {info.position} </h3>
                            <h3> Birth Date: {info.birth_date} </h3>
                        </>}

                    </div>
                    <div className='updates'>
                        {!this.state.showUpdateForm && <button onClick={this.toggleUpdateForm}> Add Update </button>}

                        {this.state.showUpdateForm && 
                                <UpdateForm addUpdate={this.addUpdate} id={info.id} closeForm={this.toggleUpdateForm}/>}

                        {updatesArray.map((update, i) => {
                            return <Update key={i} update={update} activateEditMode={this.activateEditMode} 
                                            deleteUpdate={this.deleteUpdate} edit={editable} editReset={this.editReset} 
                                            closeForm={this.toggleUpdateForm} 
                                            editUpdate={this.editUpdate} id={info.id} />
                        })}
                    </div>
                </div>
            )        
    }
}

export default Employee;