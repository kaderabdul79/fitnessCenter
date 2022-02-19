import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Register.css';

const Register = () => {
    const [loginData,setLoginData] = useState({})
    const { user, userRegistration, isLoading, error } = useAuth()

    const handleonChangeData = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newloginData = {...loginData}
        newloginData[field] = value;
        // console.log(field,value,loginData)
        setLoginData(newloginData)
        // console.log(loginData)
        console.log(loginData)
    }

    const handleLoginData = (e) => {
        if(loginData.password !== loginData.password2){
            alert("password doesn't match")
        }
        userRegistration(loginData.email,loginData.password)
        e.preventDefault()
    }
    return (
        <div>
            {!isLoading && 
            <form onSubmit={handleLoginData}>
                Name<input onChange={handleonChangeData} type="text" name="name" id="" />
                Email<input onChange={handleonChangeData} type="email" name="email" id="" />
                Password<input onChange={handleonChangeData} type="password" name="password" id="" />
                Retype Password<input onChange={handleonChangeData} type="password" name="password2" id="" />
                <button>Register</button>
            </form>
            }
                <div className='loginToRegister'>
                    <Link to="/login">Do you have an account?</Link>
                </div> 
            {isLoading && <div style={{backgroundColor: 'red'}}>
                <iframe src="https://giphy.com/embed/W22b2eea2XxB6DiTWg" style={{color: 'white'}} width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/loading-sthenotes-W22b2eea2XxB6DiTWg">via GIPHY</a></p>
                        </div>  
            }    
            {user?.email && <h2>User Created successfully!</h2>}
            {error && <h2>{error}</h2>}  
        </div>
    );
};

export default Register;