import React, { Component } from 'react'
import './Login.css';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return (
            <div className='container-fluid top-div'>
                <div className='setup-bg'>
                    <div className='container form-div'>
                        <h2>Lets start booking!</h2>
                        <label>
                            <span>Username</span>
                            <input type='text'></input>
                        </label>
                        <label>
                            <span>Email</span>
                            <input type='email'></input>
                        </label>
                        <label>
                            <span>Password</span>
                            <input type='password'></input>
                        </label>
                        <label>
                            <span>Confirm Password</span>
                            <input type='password'></input>
                        </label>
                        <button className='sub-but' type='button'>Sign Up</button>
                        <p className='forgot'>Already a member?</p>
                        <Link to='/login'><button className='signup-but'>Sign In</button></Link>
                        <br/><br/><br/>
                    </div>
                </div>
            </div>
        )
    }
}
