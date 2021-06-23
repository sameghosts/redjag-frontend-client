import React from 'react'

//import components
import Login from './Login.js';
import Signup from './Signup.js';

export default function AuthPortal() {
    return (
        <div>
            <Login />
            <Signup />
        </div>
    )
}
