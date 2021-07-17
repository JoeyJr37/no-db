import React, { Component } from 'react';
import './form.css'

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            picture: '',
            firstName: '',
            lastName: '',
            birthDate: '',
            phone: '',
            email: '',
            city: '',
            country: '',
            mentor: '',
            position: '',
            initialUpdate: '',
            updatedBy: '',
        }
    }

    checkForProps = () => {
        if(this.props.info !== undefined){
            const { picture, first_name, last_name, birthDate, phone, email, city, country, mentor, position } = this.props.info;
            this.setState({ picture, firstName: first_name, lastName: last_name, birthDate, phone, email, city, country, mentor, position });
        } else {
            console.log('No props right now')
        }
    }

    componentDidMount(){
        this.checkForProps();
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
        const { picture, firstName, lastName, birthDate, phone, email, city, country, mentor, position, initialUpdate, updatedBy } = this.state;
        const employee = {
            picture, first_name: firstName, last_name: lastName, birthDate, phone, email, city, country, mentor, position
        };
        
        if (this.props.info !== undefined){
            const { id } = this.props.info;
            this.props.submitEmployee(employee, id);
            this.props.close();
        } else {
            employee.updates = [{text: initialUpdate, updatedBy: updatedBy, updatedOn: Date()}];
            this.props.submitEmployee(employee);
        }
    }

    render(){
        // console.log(this.state);

        const { picture, firstName, lastName, birthDate, phone, email, city, country, mentor, position, initialUpdate, updatedBy } = this.state;

        return (
            <form className='add-new-form'>
                <label>Profile image: <input name='picture' onChange={this.updateState} value={picture}/></label>
                <label>First Name: <input name='firstName' onChange={this.updateState} value={firstName}/></label>
                <label>Last Name: <input name='lastName' onChange={this.updateState} value={lastName}/></label>
                <label>Birth Date: <input name='birthDate' onChange={this.updateState} value={birthDate}/></label>
                <label>Phone Number: <input name='phone' onChange={this.updateState} value={phone}/></label>
                <label>Email Address: <input name='email' onChange={this.updateState} value={email}/></label>
                <label>City: <input name='city' onChange={this.updateState} value={city}/></label>
                <label>Country: <input name='country' onChange={this.updateState} value={country}/></label>
                <label>Mentor: <input name='mentor' onChange={this.updateState} value={mentor}/></label>
                <label>Position: <input name='position' onChange={this.updateState} value={position}/></label>
                <label>Initial update: <input name='initialUpdate' onChange={this.updateState} value={initialUpdate}/></label>
                <label>Updated by: <input name='updatedBy' onChange={this.updateState} value={updatedBy}/></label>
                <button onClick={this.submitEmployee}>SUBMIT</button>
            </form>
        )
    }
}

export default Form;