import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = () => {
    const {slug} = useParams()

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
                    <img src="https://fitness.wpmix.net/wp-content/uploads/2017/06/single-class.jpg" alt="" />
                    <div className="description">
                    <b>CLASS DESCRIPTION</b>
                    <p>Donec sollicitudin mattis sem, at mollis diam euismod in. Maecenas euismod iaculis lorem, quis ornare mauris. Sed et magna consectetur, dapibus mi id, imperdiet ante. Aliquam at nisi eros. Suspendisse lacinia auctor mattis. Fusce sodales mauris nec pharetra ultrices. Phasellus nisi leo, imperdiet sed leo aliquet, ullamcorper varius dui. Etiam non gravida purus, ut egestas libero. Integer posuere maximus turpis, vehicula pharetra diam mollis vel.
                        Etiam placerat, nulla imperdiet blandit vehicula, arcu massa suscipit mi, a sollicitudin nisi lorem in nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id finibus sem.</p>
                    </div>
                    <div className="features">
                        <b>FEATURES</b>
                        <li><i></i>azaz</li>
                        <li><i></i>azaza</li>
                        <li><i></i>zaza</li>
                        <li><i></i>wdwed</li>
                        <li><i></i>e3we3w</li>
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