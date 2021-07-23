import React, { Component } from 'react';
import StaffList from './StaffList';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import './staff.css';

class StaffListContainer extends Component{
    constructor(props){
        super(props)

        this.state = {
            displayForm: false,
            userInput: '',
        }
    }

    toggleFormModal = () => {
        const { displayForm } = this.state;

        if (displayForm){
            this.setState({ displayForm: false})
        } else {
            this.setState({ displayForm: true })
        }
    }

    handleChange = (e) => {
        this.setState({ userInput: e.target.value });
    }

    render(){
        const { data, showEmployee, submitEmployee } = this.props;
        const { userInput } = this.state;

        const filteredData = data.filter(obj => obj.first_name.toLowerCase().includes(userInput) || obj.last_name.toLowerCase().includes(userInput));

        return (
            <div className='staff-feed'>

                <div className='staff-header'>
                    <label>Search <input value={userInput} onChange={this.handleChange}/></label>
                    <button className='add-staff-btn' onClick={this.toggleFormModal}> + </button>
                </div>

                {this.state.displayForm && 
                <Modal>
                    <Form submitEmployee={submitEmployee} closeModal={this.toggleFormModal}/>
                </Modal>}
                
                <StaffList data={filteredData} showEmployee={showEmployee} />

            </div>
        )
    }

}


export default StaffListContainer;