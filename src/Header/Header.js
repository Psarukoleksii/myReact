import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <ul>
            <li><Link to={'/'}>STAR DB</Link></li>
            <li><Link to={'/planets'}>Planets</Link></li>
            <li><Link to={'/people'}>People</Link></li>
        </ul>
    );
}

export default Header;
