import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div>
            <form>
                Name<input type="text" name="name" id="" />
                Email<input type="email" name="email" id="" />
                Password<input type="password" name="password" id="" />
                Retype Password<input type="password" name="password" id="" />
                <button>Register</button>
                <div className='loginToRegister'>
                    <Link to="/login">Do you have an account?</Link>
                </div>
            </form> 
        </div>
    );
};

export default Register;