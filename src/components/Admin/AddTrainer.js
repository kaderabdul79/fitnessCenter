import React from 'react';
import { useState } from 'react';

const AddTrainer = () => {
    const [trainer,setTrainer] = useState({})
    const handleOnBlurTrainerData = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newtrainer = { ...trainer };
        newtrainer[field] = value;
        setTrainer(newtrainer);
        console.log(trainer)
    }
    const handleAddTrainerData = (e) => {
        // collect data
        const courseInfo = {...trainer}
        // send to the server
        fetch('http://localhost:5000/trainers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(trainer)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("Inserted trainer")
                }
            });

        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleAddTrainerData}>
                Name<input type="text" onBlur={handleOnBlurTrainerData} name="name" id="" />
                Email<input type="email" onBlur={handleOnBlurTrainerData} name="email" id="" />
                Password<input type="password" onBlur={handleOnBlurTrainerData} name="password" id="" />
                Retype Password<input type="password" onBlur={handleOnBlurTrainerData} name="repassword" id="" />
                <button>Register</button>
                {/* <div className='loginToRegister'>
                    <Link to="/login">Do you have an account?</Link>
                </div> */}
            </form> 
        </div>
    );
};

export default AddTrainer;