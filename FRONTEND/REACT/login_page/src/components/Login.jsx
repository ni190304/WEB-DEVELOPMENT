import React from 'react';
import Input from './Input';

function Login(props) {
    return (
        <div className="styling">
            <form className="form">
                <Input text='text' placeholder='Username' />
                <Input text='password' placeholder='Password' />
                {!props.isRegistered ? (<Input text='password' placeholder='Confirm Password' />) : ''}
                <button type="submit">{props.isRegistered ? 'Login' : 'Signup'}</button>
            </form>
        </div>
    );
}

export default Login;