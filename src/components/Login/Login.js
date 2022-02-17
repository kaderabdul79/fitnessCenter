import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <form>
                Email<input type="email" name="email" id="" />
                Password<input type="password" name="password" id="" />
                <button>Login</button>
                <div className='loginToRegister'>
                    <Link to="/register">Do you have an account?</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;