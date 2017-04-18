import React, { Component } from 'react'
import { Link }             from 'react-router-dom';
import { SVGguy }           from '../welcomeScreen/WelcomeScreen'
import { Route, Redirect }            from 'react-router-dom';

import { auth, database }   from '../../firebase.js'
import './LogIn.css'

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
    }
  }

  signIn() {
    const { email, password } = this.state
    const { history, logIn }         = this.props

    auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      logIn(true)
      history.push('/')
    })
    .catch((error) => {
      console.log(error);
    });
  }

  signOut() {
    auth.signOut()
    .then(() => this.props.logIn(false))
  }

  render() {
    return (
      <div className='login-page'>
        <div className='form'>
          <SVGguy />
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
              id='signin-btn'
              onClick={ () => this.signIn() }
              >
              Log In
            </button>
            <button
              id='signout-btn'
              onClick={ () => this.signOut() }
              >
              Log Out
            </button>
        </div>
      </div>
    </div>
    )
  }
}

export default LogIn