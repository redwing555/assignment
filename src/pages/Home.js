import React from 'react'
import { useAuth } from '../context/AuthContext'

function Home() {
    const { currentUser, logout } = useAuth()


    return (
        <div>
            <h1>Home</h1>
            <button
                onClick={logout}
            >Logout</button>
            <h2>{
                JSON.stringify(currentUser)
            }</h2>
        </div>
    )
}

export default Home