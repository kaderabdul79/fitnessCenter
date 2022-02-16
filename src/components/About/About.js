import React from 'react';
import './About.css';

const About = () => {
    const aboutData = {
        title: "ABOUT Fitness center",
        description: "Cras faucibus in nunc sed volutpat. Duis ac elementum velit, vel ornare lacus. Phasellus eget tincidunt odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a convallis nibh. Sed laoreet lacus eu interdum euismod. Fusce condimentum, tortor in fringilla sollicitudin, eros dui blandit risus, sit amet dignissim arcu urna eget nibh. Vestibulum ultrices, libero nec ultrices fermentu.",
        btnText: "read more"
    }
    return (
        <>
        <div className='about-area'>
            <div className="about-img">
                <img src="http://netizensstore.com/gymfit_theme/html/html/onepage_3/assets/images/home_a.png" alt="" />
            </div>
            <div className="about-content">
                <h2>{aboutData.title}</h2>
                <p>{aboutData.description}</p>
                <button className='btnstyle'>{aboutData.btnText}</button>
            </div>
        </div>
        <div className="gallery">
            <div className="horizontal">
                <img src="https://fitness.wpmix.net/wp-content/uploads/2017/06/gallery-1.jpg" alt="" />
            </div>
            <div className="vertical">
                <img src="https://fitness.wpmix.net/wp-content/uploads/2017/06/gallery-2.jpg" alt="" />
            </div>
            <div className="horizontal">
                <img src="https://fitness.wpmix.net/wp-content/uploads/2017/06/gallery-3.jpg" alt="" />
            </div>
            <div className="horizontal">
                <img src="https://fitness.wpmix.net/wp-content/uploads/2017/06/gallery-4.jpg" alt="" />
            </div>
            <div className="big">
                <img src="https://fitness.wpmix.net/wp-content/uploads/2017/06/gallery-5.jpg" alt="" />
            </div>
            <div className="vertical">
                <img src="https://fitness.wpmix.net/wp-content/uploads/2017/06/gallery-6.jpg" alt="" />
            </div>
        </div>
        </>
    );
};

export default About;