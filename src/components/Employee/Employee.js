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
        if (info.messages === undefined){
            return [{
                text: 'No updates to display'
            }]
        } else {
            const updates = info.messages.slice();
    
            updates.sort((a, b) => {
                const aDate = new Date(a.updated_on);
                const bDate = new Date(b.updated_on);
                return bDate - aDate }
            );
    
            return updates;
        }
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

        const formatBirthDate = () => {
            const { birth_date: birthDate } = this.state.info;
            if (birthDate !== undefined ){
                const birthArray = birthDate.split('T');
                return birthArray[0];
            }
        }

        const formattedBirthDate = formatBirthDate();

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
                            {/* <img src={info.picture} alt='profile-img' className='profile-img' /> */}
                            <h2>{info.first_name} {info.last_name}</h2>
                            <h3 className='position'> Position: {info.position} </h3>
                            <span className='title'>Location </span> <h3> {info.city} {info.country} </h3>
                            <span className='title'>Phone</span> <h3>{info.phone_number} </h3>
                            <span className='title'>Email</span> <h3>{info.email_address} </h3>
                            <span className='title'>FSP</span> <h3>{info.mentor} </h3>
                            <span className='title'>Birth Date</span><h3> {formattedBirthDate} </h3>
                            <div className='button-section'>
                                <button className='edit-btn' onClick={this.toggleEmployeeUpdateForm}> EDIT ME </button>
                                <button className='delete-btn' onClick={() => this.deleteEmployee(info.id)}> DELETE ME </button>
                            </div>
                        </>}

                    </div>
                    <div className='updates'>

                        {this.state.showUpdateForm && 
                                <UpdateForm addUpdate={this.addUpdate} id={info.id} closeForm={this.toggleUpdateForm}/>}
                        
                        <div className='update-header'>
                            <h4 className='update-list-title'>Updates</h4>
                            {!this.state.showUpdateForm && <button className='add-update-btn' onClick={this.toggleUpdateForm}> + </button>}
                        </div>

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