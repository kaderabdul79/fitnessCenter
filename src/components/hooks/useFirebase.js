import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import firebaseAuthentication from '../Firebase/firebase.init';
firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
         signInWithPopup(auth, googleprovider)
        .then((result) => {
            const user = result.user;
            // collect data and create new obj to put in state
            const userInfo = {
                name: user.displayName,
                email: user.email,
                img: user.photoURL
            }
            setUser(userInfo)
            // console.log(userInfo)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return {
        signInUsingGoogle,user,error
    };
};

export default useFirebase;