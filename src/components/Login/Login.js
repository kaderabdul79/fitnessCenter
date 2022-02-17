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
                    <Link to="/register">Are you new User?</Link>
                </div>
                <button>Signin Using Google</button>
            </form>
        </div>
    );
};

export default Login;