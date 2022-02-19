import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';

const Login = () => {
    const {signInUsingGoogle,user,logOut,loginUser, isLoading, error} = useAuth()
    // console.log(signInUsingGoogle)
    const [loginData,setLoginData] = useState({})

    const handleonChangeData = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newloginData = {...loginData}
        newloginData[field] = value;
        // console.log(field,value,loginData)
        setLoginData(newloginData)
        // console.log(loginData)
    }

    const handleLoginData = (e) => {
        loginUser(loginData.email,loginData.password)
        e.preventDefault()
    }
    return (
        <div>
            <h2>{user?.name}</h2>
            {user?.name && <button onClick={logOut}>logout</button>}
            <form onSubmit={handleLoginData}>
                Email<input onChange={handleonChangeData} type="email" name="email" id="" />
                Password<input onChange={handleonChangeData} type="password" name="password" id="" />
                {!user.email && <button>Login</button>}
                <div className='loginToRegister'>
                    <Link to="/register">Are you new User?</Link>
                </div>
            </form>
            {user?.name && <h2>Successfully Login user</h2>}
            {error && <h2>{error}</h2>}
            <button onClick={signInUsingGoogle}>Signin Using Google</button>
        </div>
    );
};

export default Login;