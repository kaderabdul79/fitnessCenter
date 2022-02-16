import React from 'react';
import '../ContactUs/ContactUs.css';

const InputBox = ({type,value,placeValue}) => {
    return (
        <div className='inputbox'>
            <label className='inputlavel'>{value}</label>
            <input className="inputfield" type={type} placeholder={placeValue} />
        </div>
    );
};

export default InputBox;