import React, { Component} from 'react';
import UpdateList from './UpdateList'

class UpdateListContainer extends Component{
    constructor(props){
        super(props)

        this.state = {
            updateArray: [],
        }
    }


    componentDidMount(){
        const { data } = this.props;

        /** Format data for update array in prepartion for sorting */
        const updateArray = data.flatMap(obj => {
            return obj.updates.map(update => {
                return {
                    id: obj.id,
                    picture: obj.picture,
                    first_name: obj.first_name,
                    last_name: obj.last_name,
                    text: update.text,
                    updatedBy: update.updatedBy,
                    updatedOn: update.updatedOn,
                    concernLevel: update.concernLevel
                }
            })
        })

        /* Sort update array by date */
        updateArray.sort((a, b) => {
            const aDate = new Date(a.updatedOn);
            const bDate = new Date(b.updatedOn);
            return bDate - aDate }
        );

        this.setState({ updateArray });
    }

    render(){
        const { updateArray } = this.state;

        return (
            <UpdateList updateArray={updateArray} showEmployee={this.props.showEmployee} />
        )
    }
}
    
export default UpdateListContainer;