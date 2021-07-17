import React, { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            input: '',
        }
    }

    render(){
        return (
            <h1>Form</h1>
        )
    }
}

export default Form;