import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = () => {
    const {slug} = useParams()
    const [course,setCourse] = useState([])
    // load specific course data from own api
    useEffect(()=>{
        fetch(`http://localhost:5000/courses/${slug}`)
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    // console.log(course)
    
    
    return (
        <>
            <div className="contact-area">
                <div className="contactbgTop">
                    <div className="title">{slug}</div>
                    <img src="http://fitness.wpmix.net/wp-content/themes/absolutefitness/img/upper-title-bg.jpg" alt="" />
                </div>
            </div>
            <div className='courseDetails'>
                <div className="coursedetails-left">
                    <img src={course.img} alt="course banner" />
                    <div className="description">
                    <b>CLASS DESCRIPTION</b>
                    <p>{course.description}</p>
                    </div>
                    <div className="features">
                        <b>FEATURES</b>
                        <li><i></i>{course.features[0]}</li>
                        <li><i></i>{course.features[1]}</li>
                        <li><i></i>{course.features[2]}</li>
                        <li><i></i>{course.features[3]}</li>
                        <li><i></i>{course.features[4]}</li>
                    </div>
                </div>
                <div className="coursedetails-right">
                    <div className="course-details">
                        <h2>COURSE DETAILS</h2>
                        <li>Trainer: WE</li>
                        <li>qs</li>
                        <li>3</li>
                        <li>A</li>
                        <li>ss</li>
                        <button className='btnstyle'>book now</button>
                    </div>
                    <div className="course-trainer">
                        <h4>COURSE TRAINER</h4>
                        <img src="https://fitness.wpmix.net/wp-content/uploads/2017/06/widget-desc-1.jpg" alt="" />
                        <h3>CHARLES POWERS</h3>
                        <button className='btnstyle'>view profile</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CourseDetails;