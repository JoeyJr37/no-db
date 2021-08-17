import React from 'react';
import './header.css'

const Header = ({handleClick}) => {
    return (
        <nav className='nav-bar'>
            <h2 onClick={()=> handleClick('allStaff')}> Staff </h2>
            {/* <h2 onClick={()=> handleClick('updates')}> NewsFeed </h2> */}
        </nav>
    )
}

export default Header;