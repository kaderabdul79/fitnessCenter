import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [courses,setCourses] = useState([])
    // load data from own api
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
// console.log(course)
    return (
    <>
        <div className='courses-title'><h2>OUR COUESES</h2></div>
         <div className='courses-area'>
            {
                  courses.map((course,index) => (
                    course.featured === true ? <>
                            <div className='course-area'>
                <div className="course-img">
                    <img src={course.img} alt="" />
                </div>
                <h2>{course.title}</h2>
                <p>{(course.description.length > 100) ? course.description.substring(0,100) : course.description}</p>
                <button className='btnstyle'><Link to={`/courses/${course.slug}`}>Learn more</Link></button>
                </div>
                    </> : ''
                ))
              }
        </div>
    </>   
    );
};

export default Home;