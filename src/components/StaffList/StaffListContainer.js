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

    render(){
        const { data, showEmployee, submitEmployee } = this.props;


        return (
            <div className='staff-feed'>

                <button className='add-staff-btn' onClick={this.toggleFormModal}>ADD EMPLOYEE </button>

                {this.state.displayForm && 
                <Modal>
                    <Form submitEmployee={submitEmployee} closeModal={this.toggleFormModal}/>
                </Modal>}
                
                <StaffList data={data} showEmployee={showEmployee} />

            </div>
        )
    }

}


export default StaffListContainer;