import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, FacebookAuthProvider,  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();

// const auths = getAuth();
// signInWithRedirect(auths, facebookProvider);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = (email, password) => {
        setLoading(true);
        return signOut(auth)
    }

    // google
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
// // facebook
//     const signInWithFacebook = () =>{
//         setLoading(true);
//         return signInWithPopup(auth, facebookProvider)
//     }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log("we have out current user", currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        loading,
        user,
        createUser
        , signInUser,
        signOutUser,
        signInWithGoogle,
        // signInWithFacebook,


    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;