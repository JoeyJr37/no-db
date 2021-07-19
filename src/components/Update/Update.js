import React, { Component } from 'react';
import './update.css';

class Update extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: '',
            text: '',
            updatedBy: '',
            updatedOn: '',
            concernLevel: '',
        }
    }

    checkForProps = () => {
        if (this.props.update.text !== undefined){
            const { id, text, updatedBy, updatedOn, concernLevel } = this.props.update;
            this.setState({ id, text, updatedBy, updatedOn, concernLevel });
        }
    }
    componentDidMount(){
        this.checkForProps();
    }

    componentDidUpdate(prevProps){
        if(this.props.update.concernLevel !== this.state.concernLevel){
            const { id, text, updatedBy, updatedOn, concernLevel } = this.props.update;
            this.setState({ id, text, updatedBy, updatedOn, concernLevel });
        }
    }

    editUpdate = () => {
        const { id, text, updatedBy, updatedOn, concernLevel } = this.state;
        const update = { id, text, updatedBy, updatedOn, concernLevel };
        this.props.editUpdate(update);
    }

    deleteUpdate = () => {
        this.props.deleteUpdate(this.state.id);
    }

    render(){
        const { text, updatedBy, updatedOn, concernLevel } = this.state;

        return (
            <div className={`update ${concernLevel === 'low' ? 'low' : ""}
                ${concernLevel === 'medium' ? 'medium' : ""}
                ${concernLevel === 'high' ? 'high' : ""}`}>
                            <p>{text}</p>
                            <p>Updated By: {updatedBy} On {updatedOn}</p>
                            <p>Concern level: {concernLevel}</p>
                            <button onClick={this.editUpdate}>EDIT ME</button>
                            <button onClick={this.deleteUpdate}>DELETE ME</button>
                            </div>
        )
    }
}

export default Update;