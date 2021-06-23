import React, { useState } from 'react'

//import components
import Login from './Login'
import Signup from './Signup'

export default function AuthPortal() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <Login  
                setUsername={setUsername} 
                setPassword={setPassword}
            />
            <Signup 
                setUsername={setUsername} 
                setEmail={setEmail} 
                setPassword={setPassword}
            />
        </div>
    )
}
