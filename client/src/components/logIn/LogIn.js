import React, { Component } from "react";
import { SVGguy } from "../welcomeScreen/WelcomeScreen";
import { auth } from "../../firebase.js";
import "./LogIn.css";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  signIn() {
    const { email, password } = this.state;
    const { history, logIn } = this.props;

    auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        logIn(true);
        history.push("/");
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <SVGguy />
          <div className="login-form">
            <input
              type="text"
              name="email"
              placeholder="username"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            <button id="signin-btn" onClick={() => this.signIn()}>
              Log In
            </button>
          </div>
          {this.state.error && <h2 className="error">{this.state.error}</h2>}
        </div>
      </div>
    );
  }
}

export default LogIn;
