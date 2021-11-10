import './Navigation.css'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import useAuth from '../../../Hook/useAuth';
import { Button } from '@mui/material';


const Navigation = () => {
    const [isMenueOpen, setIsMenueOpen] = useState(false)
    const { user } = useAuth()


    const handleClick = () => {
        setIsMenueOpen(!isMenueOpen)
    }

    return (
        <nav className='NavbarItems'>
            <h1 className="navbar-logo">Drone</h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={isMenueOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={isMenueOpen ? 'nav-menu active' : 'nav-menu'}>
                <li>

                    <NavLink className='nav-links' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='nav-links' to='/Explore'>Explore</NavLink>
                </li>
                {!user && (
                    <li>
                        <NavLink className='nav-links' to='/signin'>Sign In</NavLink>
                    </li>
                )}
                {user && (
                    <li>
                        <Button variant='contained'>Sign Out</Button>
                    </li>
                )}



            </ul>
        </nav>
    );
};

export default Navigation;