import React from 'react';
import { Link } from 'react-router-dom';
import './Trainers.css';

const Trainers = () => {
    return (
        <div className='trainers-area'>
            <div className="trainer">
                <div className="trainers-img">
                    <img src="https://fitness.wpmix.net/wp-content/uploads/2017/06/single-trainer.jpg" alt="" />
                </div>
                <div className="trainers-info">
                    <h3>JULIA JONES</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='btnstyle'><Link to={`/trainers}`}>view profile</Link></button>
                </div>
            </div>
            <div className="trainer">
                <div className="trainers-img">
                    <img src="https://fitness.wpmix.net/wp-content/uploads/2017/06/single-trainer.jpg" alt="" />
                </div>
                <div className="trainers-info">
                    <h3>JULIA JONES</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='btnstyle'><Link to={`/trainers}`}>view profile</Link></button>
                </div>
            </div>
            <div className="trainer">
                <div className="trainers-img">
                    <img src="https://fitness.wpmix.net/wp-content/uploads/2017/06/single-trainer.jpg" alt="" />
                </div>
                <div className="trainers-info">
                    <h3>JULIA JONES</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='btnstyle'><Link to={`/trainers}`}>view profile</Link></button>
                </div>
            </div>
            <div className="trainer">
                <div className="trainers-img">
                    <img src="https://fitness.wpmix.net/wp-content/uploads/2017/06/single-trainer.jpg" alt="" />
                </div>
                <div className="trainers-info">
                    <h3>JULIA JONES</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='btnstyle'><Link to={`/trainers}`}>view profile</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Trainers;