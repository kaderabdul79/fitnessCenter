import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    const {signInUsingGoogle,user} = useFirebase()
    // console.log(signInUsingGoogle)
    const handleLoginData = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <h2>{user?.name}</h2>
            <form onSubmit={handleLoginData}>
                Email<input type="email" name="email" id="" />
                Password<input type="password" name="password" id="" />
                <button>Login</button>
                <div className='loginToRegister'>
                    <Link to="/register">Are you new User?</Link>
                </div>
                <button onClick={signInUsingGoogle}>Signin Using Google</button>
            </form>
        </div>
    );
};

export default Login;