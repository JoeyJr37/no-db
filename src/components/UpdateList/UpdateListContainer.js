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

    compareConcernLevels = (a, b) => {
        
        let x;
        let y;

        if (a.concernLevel === 'high'){
            x = 1;
        } else if (a.concernLevel === 'medium') {
            x = 2;
        } else {
            x = 3;
        }

        if (b.concernLevel === 'high'){
            y = 1;
        } else if (b.concernLevel === 'medium'){
            y = 2;
        } else {
            y = 3;
        }

        if (x === 1 && y === 2){
            return 1;
        } else if (x === 1 && y === 3){
            return -1;
        } else if (x === 2 && y === 3){
            return -1;
        } else if (x === 3 && y === 1){
            return -1;
        } else {
            return 0;
        }

    }

    sortByConcernLevel = () => {
        const { updateArray } = this.state;
        const updateArrayCopy = updateArray.slice();
        updateArrayCopy.sort(this.compareConcernLevels);
        this.setState({ updateArray: updateArrayCopy })
    }

    render(){
        const { updateArray } = this.state;

        return (
            <>
            <button onClick={this.sortByConcernLevel}> Filter </button>
            <UpdateList updateArray={updateArray} showEmployee={this.props.showEmployee} />
            </>
        )
    }
}
    
export default UpdateListContainer;