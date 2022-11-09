import React, { useState, useEffect, createContext, useContext } from 'react';
import { auth } from '../utils/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

const AuthContext = createContext({
    currentUser: null || localStorage.getItem('currentUser'),
    login: () => { },
    logout: () => { },
    register: () => { },
    googleLogin: () => { },
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user ? user : null)
            localStorage.setItem('currentUser', JSON.stringify(user))
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const value = {
        currentUser,
        login,
        logout,
        register,
        googleLogin,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}

