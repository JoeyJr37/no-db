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
        return(
            <>
            {this.props.data.map((obj, i) => {
                return <Card key={i} data={obj} display={this.props.display} showEmployee={this.props.showEmployee}/>
            })}
            
            </>
        )
    }
}

export default Updates;