import React, { Component } from 'react'

import './Login.css'

class Login extends Component {
    render() {

        return (
            <div className='container-fluid top-div'>
                <div className='setup-bg'>
                    <div className='container form-div'>
                        <h2>Welcome</h2>
                        <label>
                            <span>Email</span>
                            <input type='email'></input>
                        </label>
                        <label>
                            <span>Password</span>
                            <input type='password'></input>
                        </label>
                        <p className='forgot'>Forgot Password?</p>
                        <button className='sub-but' type='button'>Sign In</button>
                        <p className='forgot'>Not a member?</p>
                        <button className='signup-but' type='button'>Sign Up</button>
                        <br/><br/><br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;