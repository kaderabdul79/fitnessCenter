import React from 'react';
import { useState } from 'react';

const AddCourse = () => {
    const [courseData,setCourseData] = useState({})
    const handleOnBlurCourseData = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newcourseData = { ...courseData };
        newcourseData[field] = value;
        setCourseData(newcourseData);
        console.log(courseData)
    }
    const handleAddCourseData = (e) => {
        // collect data
        const courseInfo = {...courseData}
        // send to the server
        fetch('http://localhost:5000/courses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(courseInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("Inserted")
                }
            });

        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleAddCourseData}>
                Name<input type="text" onBlur={handleOnBlurCourseData} name="name" id="" />
                Email<input type="email" onBlur={handleOnBlurCourseData} name="email" id="" />
                Password<input type="password" onBlur={handleOnBlurCourseData} name="password" id="" />
                Retype Password<input type="password" onBlur={handleOnBlurCourseData} name="repassword" id="" />
                <button>Register</button>
                {/* <div className='loginToRegister'>
                    <Link to="/login">Do you have an account?</Link>
                </div> */}
            </form> 
        </div>
    );
};

export default AddCourse;