import React, { Component } from 'react'
import { Link }             from 'react-router-dom';
import './LogIn.css'

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  render() {
    return (
      <div className='login-page'>
        <div className='form'>
          <div className='login-form'>
            <input type='text'
              name='email'
              placeholder='username'
              value={ this.state.email }
              onChange={ (e) => this.setState({ email: e.target.value }) }
            />
            <input type='password'
              name='password'
              placeholder='password'
              value={ this.state.password }
              onChange={ (e) => this.setState({ password: e.target.value }) }
            />
            <button
              id='signin-btn'>
              Log In
            </button>
        </div>
      </div>
    </div>
    )
  }
}

export default LogIn