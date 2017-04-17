import React, { Component } from 'react'
import { Link }             from 'react-router-dom';
import './LogIn.css'

class LogIn extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='login-page'>
        <div className='form'>
          <div className='login-form'>
            <input type='text'
              name='email'
              placeholder='username'
            />
            <input type='password'
              name='password'
              placeholder='password'
            />

            <button
              id='signin-btn'
              onClick={ () => this.signIn() }>Log In
            </button>
        </div>
      </div>
    </div>
    )
  }
}

export default LogIn