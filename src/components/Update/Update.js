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
            showEditControls: false,
        }
    }

    componentDidMount(){
        if (this.props.update.text !== undefined){
            // console.log(this.props.update);
            const { id, text, updatedBy, updatedOn, concernLevel } = this.props.update;
            this.setState({ id, text, updatedBy, updatedOn, concernLevel });
        } 
    }

    componentDidUpdate(prevProps){
        if (prevProps !== this.props){
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

    toggleEditControls = () => {
        const { showEditControls } = this.state;
        if(showEditControls){
            this.setState({ showEditControls: false });
        } else {
            this.setState({ showEditControls: true });
        }
    }

    render(){
        const { text, updatedBy, updatedOn, concernLevel, showUpdateForm, update, showEditControls } = this.state;
        const { edit, editUpdate, id } = this.props;

        return (
            <div className={`individual-update update ${concernLevel === 'low' ? 'low' : ""}
                ${concernLevel === 'medium' ? 'medium' : ""}
                ${concernLevel === 'high' ? 'high' : ""}`} onClick={this.toggleEditControls}>

                    {showUpdateForm && <UpdateForm closeEditForm={this.closeUpdateForm} 
                            edit={edit} info={update} editUpdate={editUpdate} id={id} />}

                    {!showUpdateForm && <>
                            <div className='update-card'>
                                <div className='update-details'>
                                    <div className='update-message'>{text}</div>
                                    
                                    <div className='update-footer'>
                                        <div className='update-author-and-date'>Updated By: {updatedBy} On {updatedOn}</div>
                                        <span>{concernLevel}</span>
                                    </div>
                                </div>
                            </div>                             
                            {showEditControls && <div className='button-section'> 
                                    <button onClick={this.openUpdateForm}>EDIT ME</button>
                                    <button onClick={this.deleteUpdate}>DELETE ME</button> 
                                </div>}
                            </>}
            </div>
        )
    }
}

export default Update;