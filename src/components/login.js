import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../firebase';
import * as ROUTES from '../constants/routes';
import {SignUpLink} from './signup'

const Login = (props) => (
    <div>
      <h1>Sign In</h1>
      <LogInForm />
      <SignUpLink />
    </div>
  );

const INITIAL_STATE = {
    email: "",
    password: "",
    error: null
};


class LogInFormBase extends Component {
    constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
      const { email, password } = this.state;

      this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
          //this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.LANDING);
        })
        .catch(error => {
          this.setState({ error });
        });

      event.preventDefault();
    };

    onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    render() {
      const { email, password, error } = this.state;

      const isInvalid = password === '' || email === '';

      return (
        <div className='auth'>
        <form onSubmit={this.onSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>

          {error && <p>{error.message}</p>}
        </form>
          <div>
            <button
              className="sign-up-btn"
              onClick={() => {
                this.props.firebase
                  .doSignInWithGoogle()
                  .then(() => this.props.history.push(ROUTES.LANDING));
              }}
            >
              Sign In With Google
            </button>
          </div>
        </div>
      );
    }
}


const LogInForm = compose(
  withRouter,
  withFirebase,
)(LogInFormBase);


export default Login;

export {LogInForm}
