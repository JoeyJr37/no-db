import React, { Component } from 'react';
import StaffCard from '../StaffCard/StaffCard';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import './staff.css';

// const Staff = ({ data, showEmployee, showForm }) => {
//     return(
//         <div className='staff-feed'>
//             <button className='add-staff-btn' onClick={()=>showForm('showForm')}>ADD EMPLOYEE</button>
//             {data.map((employee, i) => {
//                 return <StaffCard key={i} data={employee} showEmployee={showEmployee}/>
//             })}
//         </div>
//     )
// }
class Staff extends Component{
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

                <button className='add-staff-btn' onClick={this.toggleFormModal}>ADD EMPLOYEE MODAL</button>

                {this.state.displayForm && 
                <Modal>
                    <Form submitEmployee={submitEmployee} closeModal={this.toggleFormModal}/>
                </Modal>}
                
                {data.map((employee, i) => {
                    return <StaffCard key={i} data={employee} showEmployee={showEmployee}/>
                })}

            </div>
        )
    }

}


export default Staff;