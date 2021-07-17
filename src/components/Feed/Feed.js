import React from 'react';
import Staff from '../Staff/Staff'
import Updates from '../Updates/Updates'

const Feed = ({display, data, showEmployee}) => {
    return(
        <>
        {display.allStaff && <Staff data={data} display={display} showEmployee={showEmployee} />}
        {display.updates && <Updates data={data} display={display} showEmployee={showEmployee} />}
        </>
    )
}

export default Feed;