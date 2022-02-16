import React from 'react';
import './Course.css';

const Course = (props) => {
    const {title,course_details,img,description,features} = props.course
    // console.log(props.course)
    return (
        <div className='course-area'>
            <img src={img} alt="" />
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore voluptatem, facilis fugiat laudantium modi molestias accusantium enim, omnis doloremque dolores neque explicabo mollitia quas consectetur, magni beatae accusamus hic ex</p>
                <button className='btnstyle'>learn more</button>
            {/* <div className="course-img">
                <img src={img} alt="" />
            </div>
            <div className="course-content">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore voluptatem, facilis fugiat laudantium modi molestias accusantium enim, omnis doloremque dolores neque explicabo mollitia quas consectetur, magni beatae accusamus hic ex</p>
                <button>learn more</button>
            </div> */}
        </div>
    );
};

export default Course;