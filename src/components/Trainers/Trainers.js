import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Trainers.css';

const Trainers = () => {
 
    const [trainers,setTrainers] = useState([])

    // load data from own api
    useEffect(()=>{
        fetch('http://localhost:5000/trainers')
        .then(res => res.json())
        .then(data => setTrainers(data))
    },[])

     
    return (
        <div className='trainers-area'>
              {
                  trainers.map((trainer,index) => (
                  <div className="trainer" key={index}>
                      {/* {console.log(trainer._id)} */}
                    <div className="trainers-img">
                        <img src={trainer.img} alt="trainers image" />
                    </div>
                    <div className="trainers-info">
                        <h3>{trainer.name}</h3>
                        <p>{trainer.Classes}</p>
                        <button className='btnstyle'><Link to={`/trainers/${trainer._id}`}>view profile</Link></button>
                    </div>
                   </div>
                  ))
              }
        </div>
    );
};

export default Trainers;