import React from 'react';
import '../ContactUs/ContactUs.css';

const InputBox = ({type,value,placeValue}) => {
    return (
        <div className='inputbox'>
            {/* <div className="label">
                <label className='inputlavel'>{value}</label>
            </div> */}
            <div className="inputfield">
                <input className="inputfield" type={type} placeholder={placeValue} />
            </div>
        </div>
    );
};

export default InputBox;