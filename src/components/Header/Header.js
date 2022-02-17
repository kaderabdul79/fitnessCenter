import { MenuOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Data } from './MobileNavMenuData'
import './Header.css'

const Header = () => {
    const [open,setOpen] = useState(false)
    const showMenu = () => {
        setOpen(!open)
    }
    return (
        <div className='header'>
            
            <nav>
                <div className="logo">
                    <h1>Fitness Center</h1>
                </div>
                <ul className="ul-items">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/trainers">Trainers</Link>
                    </li>
                    <li>
                        <Link to="/trainers">Schedules</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/addcourse">Add Course</Link>
                    </li>
                    <div className="humburger-menu">
                        <MenuOutlined onClick={showMenu} className="menu"></MenuOutlined>
                    </div>

                </ul>

    
            </nav>   


            <nav className={open ? 'slider active' : 'slider'}>
                <ul className="slider-ul" onClick={showMenu}>
                    {Data.map((item,index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>        
        </div>
    );
};

export default Header;