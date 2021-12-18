import React from 'react';

const Course = () => {
    const allcourses = [
        {
            id: 1,
            courseName : 'Weight gain',
            duration: 4,
            fee: 5000
        },
        {
            id: 2,
            courseName : 'Weight Loss',
            duration: 3,
            fee: 12000
        },
        {
            id: 3,
            courseName : 'Body Building',
            duration: 6,
            fee: 8000
        }
    ]
    return (
        <div>
            <h2>Our Courses</h2>
        </div>
    );
};

export default Course;