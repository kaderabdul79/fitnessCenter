import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = (props) => {
    const {title,slug,course_details,img,description,features} = props.course
    // console.log(props.course)
    return (
        <div className='course-area'>
                <div className="course-img">
                    <img src={img} alt="" />
                </div>
                <h2>{title}</h2>
                <p>{(description.length > 100) ? description.substring(0,100) : description}</p>
                <button className='btnstyle'><Link to={`/courses/${slug.toLowerCase()}`}>Learn more</Link></button>
        </div>
    );
};

export default Course;