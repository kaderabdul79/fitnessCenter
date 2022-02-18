import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseAuthentication from '../Firebase/firebase.init';
firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');    
    const [isLoading, setIsLoading] = useState(true);


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

    const userRegistration = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setError('');
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false));
    }
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }else{
                setUser({})
            }
            setIsLoading(false);
        return () => unsubscribe;
        })
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
             setError(error.message)
          })
          .finally(() => setIsLoading(false));
    }

    return {
        signInUsingGoogle,user,error,logOut,userRegistration,isLoading
    };
};

export default useFirebase;