import React, { Component } from 'react';

class Employee extends Component{
    constructor(props){
        super(props)

        this.state = {
            input: '',
        }
    }

    render(){
        console.log(this.props.info);
        const { info } = this.props;

        return(
            <>
                <h2>{info.first_name} {info.last_name}</h2>

            </>
        )
    }
}

export default Employee;