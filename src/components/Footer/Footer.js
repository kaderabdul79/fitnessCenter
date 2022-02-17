import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-area'>
            <div className="footer">
                <div className="footer-widget-1 foo">
                    <h2>FITNESS CENTER</h2>
                    <p>ligula sed porta cursus, lectus ligula interdum tortor, vitae tempor leo eros lobortis ante. Integer semper, metus in tincidunt euismod.</p>
                </div>
                <div className="footer-widget-2 foo">
                    <h2>LINKS</h2>
                    <li>
                       <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                    <Link to="/trainers">Trainers</Link>
                    </li>
                    <li>
                    <Link to="/schedules">Schedules</Link>
                    </li>
                    <li>
                    <Link to="/about">About Us</Link>
                    </li>
                </div>
                <div className="footer-widget-3 foo">
                    <h2>CONTACT US</h2>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/trainers">Trainers</Link>
                    </li>
                    <li>
                        <Link to="/schedules">Schedules</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                </div>
                <div className="footer-widget-4 foo">
                    <h2>INSTAGRAM</h2>
                    
                    <li>
                        <Link to="/schedules">Schedules</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Footer;