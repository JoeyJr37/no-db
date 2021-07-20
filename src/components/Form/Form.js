import React, { Component } from 'react';
import './form.css'

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            picture: '',
            first_name: '',
            last_name: '',
            birth_date: '',
            phone: '',
            email: '',
            city: '',
            country: '',
            mentor: '',
            position: '-1',
            initialUpdate: '',
            updatedBy: '',
            updates: [],
        }
    }

    componentDidMount(){
        if(this.props.info !== undefined){
            const { picture, first_name, last_name, birth_date, phone, email, 
                city, country, mentor, position, updates } = this.props.info;
            this.setState({ picture, first_name, last_name, birth_date, phone, email, city, country, mentor, position, updates });
        } else {
            console.log('No props right now')
        }
    }

    updateState = (e) => {
        const newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    
    reset = () => {
        const inputState = Object.assign({}, this.state);
        for(const key in inputState){
            inputState[key] = '';
        };
        this.setState(inputState);
    }

    submitEmployee = (e) => {
        e.preventDefault();
        const { picture, first_name, last_name, birth_date, phone, email, city, 
            country, mentor, position, initialUpdate, updatedBy } = this.state;
        const employee = {
            picture, first_name, last_name, birth_date, phone, email, city, country, mentor, position
        };
        
        if (this.props.info !== undefined){
            const { id } = this.props.info;
            employee.updates = this.props.info.updates;
            this.props.submitEmployee(employee, id);
            this.props.close();
        } else {
            employee.updates = [{text: initialUpdate, updatedBy: updatedBy, updatedOn: Date()}];
            this.props.submitEmployee(employee);
        }
    }

    render(){

        const { picture, first_name, last_name, birth_date, phone, email, city, country, mentor, position, initialUpdate, updatedBy } = this.state;

        return (
            <form className='add-new-form'>
                <label>Profile image: <input name='picture' onChange={this.updateState} value={picture}/></label>
                <label>First Name: <input name='first_name' onChange={this.updateState} value={first_name}/></label>
                <label>Last Name: <input name='last_name' onChange={this.updateState} value={last_name}/></label>
                <label>Birth Date: <input name='birth_date' onChange={this.updateState} value={birth_date}/></label>
                <label>Phone Number: <input name='phone' onChange={this.updateState} value={phone}/></label>
                <label>Email Address: <input name='email' onChange={this.updateState} value={email}/></label>
                <label>City: <input name='city' onChange={this.updateState} value={city}/></label>
                <label>Country: <input name='country' onChange={this.updateState} value={country}/></label>
                <label>Mentor: <input name='mentor' onChange={this.updateState} value={mentor}/></label>
                <label> Position:
                        <select value={position} onChange={this.updateState} name='position'>
                            <option value='-1' default disabled> Choose one: </option>
                            <option value="Team member">Team Member</option>
                            <option value="Team leader">Team Leader</option>
                        </select>
                </label>
                {this.props.info === undefined &&
                        <>
                        <label>Initial update: <input name='initialUpdate' onChange={this.updateState} value={initialUpdate}/></label>
                        <label>Updated by: <input name='updatedBy' onChange={this.updateState} value={updatedBy}/></label>
                        </>
                }
                <button onClick={this.submitEmployee}>SUBMIT</button>
            </form>
        )
    }
}

export default Form;