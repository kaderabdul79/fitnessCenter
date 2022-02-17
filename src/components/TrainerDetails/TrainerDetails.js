import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './TrainerDetails.css';

const TrainerDetails = () => {
    const {id} = useParams()
    const [trainer,setTrainer] = useState([])
    // load specific trainer data from own api
    useEffect(()=>{
        fetch(`http://localhost:5000/trainers/${id}`)
        .then(res => res.json())
        .then(data => setTrainer(data))
    },[])

    // console.log(id)
    
    return (
        <>
            <div className="contact-area">
                <div className="contactbgTop">
                    <div className="title">{trainer.name}</div>
                    <img src="http://fitness.wpmix.net/wp-content/themes/absolutefitness/img/upper-title-bg.jpg" alt="" />
                </div>
            </div>
            <div className='TrainerDetails'>
                <div className="Trainerdetails-left">
                    <img src={trainer.img} alt="trainer banner" />
                    <div className="description">
                    <b>{trainer.name}</b>
                    <p></p>
                    </div>
                    <div className="features">
                        <b>PROFESSIONAL SKILLS {trainer?.skills?.fitness}</b>
                        {/* <li><i></i>{trainer.features[0]}</li>
                        <li><i></i>{trainer.features[1]}</li>
                        <li><i></i>{trainer.features[2]}</li>
                        <li><i></i>{trainer.features[3]}</li>
                        <li><i></i>{trainer.features[4]}</li> */}
                    </div>
                </div>
                 <div className="TrainerDetails-right">
                    <div className="trainer-details">
                        <h2>Profile DETAILS</h2>
                        <li><span>Classes:</span> {trainer.Classes}</li>
                        <li><span>Position:</span> {trainer.Position}</li>
                        <li><span>Experience:</span> {trainer.Experience}</li>
                        <li><span>Social Links:</span> <Link to=""><i>f</i></Link> </li>
                        <button className='btnstyle'>book now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrainerDetails;