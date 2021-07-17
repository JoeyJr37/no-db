import React, { Component } from 'react';
import Card from '../Card/Card';

class Updates extends Component{
    constructor(props){
        super(props)

        this.state = {
            input: '',
        }
    }

    render(){

        const { data, display, showEmployee } = this.props;

        return(
            <>
            {data.map((obj, i) => {
                return <Card key={i} data={obj} display={display} showEmployee={showEmployee}/>
            })}
            
            </>
        )
    }
}

export default Updates;