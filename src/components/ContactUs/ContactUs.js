import React from 'react';
import { useState } from 'react';
import CustomBtn from '../Element/CustomBtn';
import InputBox from '../Element/InputBox';
import './ContactUs.css';

const ContactUs = () => {
    const [contactInfo,setContactInfo] = useState([])

    return (
        <div className='contact-area'>
            <div className="contactbgTop">
                <div className="title">Contact Us</div>
                <img src="http://fitness.wpmix.net/wp-content/themes/absolutefitness/img/upper-title-bg.jpg" alt="" />
            </div>
            <div className="contact-info">
                <InputBox type="text" value="name" placeValue="Enter Name"></InputBox>
                <InputBox type="email" value="email" placeValue="kader@gmail.com"></InputBox>
                <InputBox type="phone" value="phone" placeValue="Enter Phone Number"></InputBox>
                <InputBox type="textarea" value="textarea" placeValue="Write Message"></InputBox>
                <CustomBtn children="Send Message"></CustomBtn>
            </div>
        </div>
    );
};

export default ContactUs;