import React, { Component } from 'react';
import './update.css';
import UpdateForm from '../UpdateForm/UpdateForm';

class Update extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: '',
            text: '',
            updatedBy: '',
            updatedOn: '',
            concernLevel: '',
            showUpdateForm: false,
            update: {},
        }
    }

    componentDidMount(){
        if (this.props.update.text !== undefined){
            const { id, text, updatedBy, updatedOn, concernLevel } = this.props.update;
            this.setState({ id, text, updatedBy, updatedOn, concernLevel });
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.update.concernLevel !== this.state.concernLevel){
            const { id, text, updatedBy, updatedOn, concernLevel } = this.props.update;
            this.setState({ id, text, updatedBy, updatedOn, concernLevel });
        }
    }

    openUpdateForm = () => {
        const { id, text, updatedBy, updatedOn, concernLevel } = this.state;
        const update = { id, text, updatedBy, updatedOn, concernLevel };
        this.props.activateEditMode();
        this.setState({ showUpdateForm: true, update });
    }

    deleteUpdate = () => {
        this.props.deleteUpdate(this.state.id);
    }

    closeUpdateForm = () =>{
        this.setState({ showUpdateForm: false });
    }

    render(){
        const { text, updatedBy, updatedOn, concernLevel, showUpdateForm, update } = this.state;
        const { edit, editUpdate, id } = this.props;

        return (
            <div className={`update ${concernLevel === 'low' ? 'low' : ""}
                ${concernLevel === 'medium' ? 'medium' : ""}
                ${concernLevel === 'high' ? 'high' : ""}`}>

                    {showUpdateForm && <UpdateForm closeEditForm={this.closeUpdateForm} 
                            edit={edit} info={update} editUpdate={editUpdate} id={id} />}

                    {!showUpdateForm && <>                             
                            <p>{text}</p>
                            <p>Updated By: {updatedBy} On {updatedOn}</p>
                            <p>Concern level: {concernLevel}</p>
                            <button onClick={this.openUpdateForm}>EDIT ME</button>
                            <button onClick={this.deleteUpdate}>DELETE ME</button> 
                            </>}
            </div>
        )
    }
}

export default Update;