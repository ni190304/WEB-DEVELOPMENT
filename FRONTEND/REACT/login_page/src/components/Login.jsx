import React from 'react';
import Input from './Input';

function Login() {
    return (
        <div className="styling">
            <form className="form">
            <Input text='text' placeholder='Username' />
            <Input text='password' placeholder='Password' />
            <button type="submit">Login</button>
        </form>
        </div>
    );
}

export default Login;