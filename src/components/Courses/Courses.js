import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'
const Courses = () => {
    const [courses,setCourses] = useState([])
    // load data from own api
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className='courses-area'>
              {
                  courses.map((course,index) => <Course key={index} course={course}></Course>)
              }
        </div>
    );
};

export default Courses;