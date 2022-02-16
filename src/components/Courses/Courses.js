import React from 'react';
import Course from '../Course/Course';
import './Courses.css'
const Courses = () => {
    const CoursesData = [
        {
            title: "Power Yoga",
            slug: "Power Yoga",
            featured: false,
            course_details: {
                Trainer: "Charles Powers",
                Time: 1,
                Price: 40,
                Difficulty_level: "High",
                Lessons: 12
            },
            img: "http://netizensstore.com/gymfit_theme/html/html/onepage_3/assets/images/c1.jpg",
            features: ["PHYSICAL ATTRACTIVENESS","GENERAL PHYSICAL HEALTH","REHABILITATION","PLEASURE OF THE ACTIVITY","SPORTS PERFORMANCE"],
            description: "Donec sollicitudin mattis sem, at mollis diam euismod in. Maecenas euismod iaculis lorem, quis ornare mauris. Sed et magna consectetur, dapibus mi id, imperdiet ante. Aliquam at nisi eros. Suspendisse lacinia auctor mattis. Fusce sodales mauris nec pharetra ultrices. Phasellus nisi leo, imperdiet sed leo aliquet, ullamcorper varius dui. Etiam non gravida purus, ut egestas libero. Integer posuere maximus turpis, vehicula pharetra diam mollis vel."
        },
        {
            title: "STRENGTH TRAINING",
            slug: "STRENGTH TRAINING",
            featured: false,
            course_details: {
                Trainer: "Charles Powers",
                Time: 3,
                Price: 35,
                Difficulty_level: "High",
                Lessons: 12
            },
            img: "http://netizensstore.com/gymfit_theme/html/html/onepage_3/assets/images/c5.jpg",
            features: ["PHYSICAL ATTRACTIVENESS","GENERAL PHYSICAL HEALTH","REHABILITATION","PLEASURE OF THE ACTIVITY","SPORTS PERFORMANCE"],
            description: "Donec sollicitudin mattis sem, at mollis diam euismod in. Maecenas euismod iaculis lorem, quis ornare mauris. Sed et magna consectetur, dapibus mi id, imperdiet ante. Aliquam at nisi eros. Suspendisse lacinia auctor mattis. Fusce sodales mauris nec pharetra ultrices. Phasellus nisi leo, imperdiet sed leo aliquet, ullamcorper varius dui. Etiam non gravida purus, ut egestas libero. Integer posuere maximus turpis, vehicula pharetra diam mollis vel."
        },
        {
            title: "BOXING WORKOUT",
            slug: "BOXING WORKOUT",
            featured: true,
            course_details: {
                Trainer: "Charles Powers",
                Time: 3,
                Price: 50,
                Difficulty_level: "Medium",
                Lessons: 20
            },
            img: "http://netizensstore.com/gymfit_theme/html/html/onepage_3/assets/images/c4.jpg",
            features: ["PHYSICAL ATTRACTIVENESS","GENERAL PHYSICAL HEALTH","REHABILITATION","PLEASURE OF THE ACTIVITY","SPORTS PERFORMANCE"],
            description: "Donec sollicitudin mattis sem, at mollis diam euismod in. Maecenas euismod iaculis lorem, quis ornare mauris. Sed et magna consectetur, dapibus mi id, imperdiet ante. Aliquam at nisi eros. Suspendisse lacinia auctor mattis. Fusce sodales mauris nec pharetra ultrices. Phasellus nisi leo, imperdiet sed leo aliquet, ullamcorper varius dui. Etiam non gravida purus, ut egestas libero. Integer posuere maximus turpis, vehicula pharetra diam mollis vel."
        },
        {
            title: "Power Yoga",
            slug: "Power Yoga",
            featured: false,
            course_details: {
                Trainer: "Charles Powers",
                Time: 1,
                Price: 60,
                Difficulty_level: "High",
                Lessons: 14
            },
            img: "http://netizensstore.com/gymfit_theme/html/html/onepage_3/assets/images/c3.jpg",
            features: ["PHYSICAL ATTRACTIVENESS","GENERAL PHYSICAL HEALTH","REHABILITATION","PLEASURE OF THE ACTIVITY","SPORTS PERFORMANCE"],
            description: "Donec sollicitudin mattis sem, at mollis diam euismod in. Maecenas euismod iaculis lorem, quis ornare mauris. Sed et magna consectetur, dapibus mi id, imperdiet ante. Aliquam at nisi eros. Suspendisse lacinia auctor mattis. Fusce sodales mauris nec pharetra ultrices. Phasellus nisi leo, imperdiet sed leo aliquet, ullamcorper varius dui. Etiam non gravida purus, ut egestas libero. Integer posuere maximus turpis, vehicula pharetra diam mollis vel."
        },
        {
            title: "Power Yoga",
            slug: "Power Yoga",
            featured: true,
            course_details: {
                Trainer: "Tanvir",
                Time: 4,
                Price: 30,
                Difficulty_level: "Medium",
                Lessons: 18
            },
            img: "http://netizensstore.com/gymfit_theme/html/html/onepage_3/assets/images/c2.jpg",
            features: ["PHYSICAL ATTRACTIVENESS","GENERAL PHYSICAL HEALTH","REHABILITATION","PLEASURE OF THE ACTIVITY","SPORTS PERFORMANCE"],
            description: "Donec sollicitudin mattis sem, at mollis diam euismod in. Maecenas euismod iaculis lorem, quis ornare mauris. Sed et magna consectetur, dapibus mi id, imperdiet ante. Aliquam at nisi eros. Suspendisse lacinia auctor mattis. Fusce sodales mauris nec pharetra ultrices. Phasellus nisi leo, imperdiet sed leo aliquet, ullamcorper varius dui. Etiam non gravida purus, ut egestas libero. Integer posuere maximus turpis, vehicula pharetra diam mollis vel."
        },
        {
            title: "BOXING WORKOUT",
            slug: "BOXING WORKOUT",
            featured: true,
            course_details: {
                Trainer: "Charles Powers",
                Time: 1,
                Price: 20,
                Difficulty_level: "Low",
                Lessons: 6
            },
            img: "http://netizensstore.com/gymfit_theme/html/html/onepage_3/assets/images/c3.jpg",
            features: ["REHABILITATION","PLEASURE OF THE ACTIVITY","SPORTS PERFORMANCE"],
            description: "Donec sollicitudin mattis sem, at mollis diam euismod in. Maecenas euismod iaculis lorem, quis ornare mauris. Sed et magna consectetur, dapibus mi id, imperdiet ante. Aliquam at nisi eros. Suspendisse lacinia auctor mattis. Fusce sodales mauris nec pharetra ultrices. Phasellus nisi leo, imperdiet sed leo aliquet, ullamcorper varius dui. Etiam non gravida purus, ut egestas libero. Integer posuere maximus turpis, vehicula pharetra diam mollis vel."
        }
    ]
    return (
        <div className='courses-area'>
              {
                  CoursesData.map((course,index) => <Course key={index} course={course}></Course>)
              }
        </div>
    );
};

export default Courses;