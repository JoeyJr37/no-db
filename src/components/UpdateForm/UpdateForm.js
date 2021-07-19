import React, { Component } from 'react';
import './updateForm.css';
import {v4 as uuidv4} from 'uuid';

class UpdateForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: '',
            text: '',
            updatedBy: '',
            updatedOn: '',
            concernLevel: ''
        }
    }
    updateState = (e) => {
        const newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    closeForm = () => {
        /* close update form */
        this.props.closeForm();
    }

    componentDidMount(){
        if (this.props.edit){
            const { id, text, updatedBy, updatedOn, concernLevel } = this.props.info;
            this.setState({ id, text, updatedBy, updatedOn, concernLevel });
        } else {
            console.log('No props right now');
        }
    }

    submitUpdate = (e) => {
        e.preventDefault();
        const {id, text, updatedBy, updatedOn, concernLevel} = this.state;
        const body = { id, text, updatedBy, updatedOn, concernLevel };

        if (this.props.info.text !== undefined){
            this.props.editReset();
            this.props.editUpdate(this.props.id, body);
        } else {
            const id = uuidv4();
            body.id = id;
            this.props.addUpdate(this.props.id, body);
        }
    }

    render(){
        const { text, updatedBy, updatedOn, concernLevel } = this.state;

        return (
            <form className='updates-form'>
                <button onClick={this.closeForm}>Close </button>
                <label>Text: <input name='text' onChange={this.updateState} value={text}/></label>
                <label>Updated by: <input name='updatedBy' onChange={this.updateState} value={updatedBy}/></label>
                <label>Updated on: <input name='updatedOn' onChange={this.updateState} value={updatedOn}/></label>
                <label>Concern Level: <input name='concernLevel' onChange={this.updateState} value={concernLevel}/></label>
                <button onClick={this.submitUpdate}> Submit </button>
            </form>
        )
    }
}

export default UpdateForm;