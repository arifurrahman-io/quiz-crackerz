import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header  bg-purple-600 text-base lg:text-2xl font-bold text-white py-3'>
            <div>
                <h2><Link to='/'>Tech Quiz</Link></h2>
            </div>
            <div className='header-link'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;