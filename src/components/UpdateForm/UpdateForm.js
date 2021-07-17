import React, { Component } from 'react';
import './updateForm.css'

class UpdateForm extends Component{
    constructor(props){
        super(props)

        this.state = {
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

    addUpdate = (e) => {
        e.preventDefault();
        const {text, updatedBy, updatedOn, concernLevel} = this.state;
        const body = { text, updatedBy, updatedOn, concernLevel };
        this.props.addUpdate(this.props.id, body);
    }

    render(){
        const { text, updatedBy, updatedOn, concernLevel } = this.state;

        return (
            <form className='updates-form'>
                <label>Text: <input name='text' onChange={this.updateState} value={text}/></label>
                <label>Updated by: <input name='updatedBy' onChange={this.updateState} value={updatedBy}/></label>
                <label>Updated on: <input name='updatedOn' onChange={this.updateState} value={updatedOn}/></label>
                <label>Concern Level: <input name='concernLevel' onChange={this.updateState} value={concernLevel}/></label>
                <button onClick={this.addUpdate}> Submit </button>
            </form>
        )
    }
}

export default UpdateForm;