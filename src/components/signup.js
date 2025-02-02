import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../firebase';
import * as ROUTES from '../constants/routes';
import * as ROLES from '../constants/roles';

const SignUpPage = () => (
  <>
    <div className="auth">
        <h1>Sign Up!</h1>
        <div id="sign-in">
            <SignUpForm />
        </div>
    </div>
  </>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
  level:''
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;


class SignUpFormBase extends Component {
    constructor(props) {
      super(props);

      this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
      const { username, email, passwordOne, isAdmin } = this.state;
      const roles = {};

      if (isAdmin) {
        roles[ROLES.ADMIN] = ROLES.ADMIN;
      }

      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          // Create a user in your Firebase realtime database
          return this.props.firebase.user(authUser.user.uid).set(
            {
              username,
              email,
              roles,
            },
            { merge: true },
          );
        })
        .then(() => {
          this.props.history.push(ROUTES.LANDING);
        })
        .catch(error => {
          if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
            error.message = ERROR_MSG_ACCOUNT_EXISTS;
          }

          this.setState({ error });
        });

      event.preventDefault();
    };

    onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    onChangeCheckbox = event => {
      this.setState({ [event.target.name]: event.target.checked });
    };

    render() {
      const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;

      const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';

      return (
        <>
        <form className='styled-form' onSubmit={this.onSubmit}>
          <input
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
          <button className='button' disabled={isInvalid} type="submit">
            Sign Up
          </button>
        </form>
        {error && <p>{error.message}</p>}
        <div className='signup-link'>OR
          <div><Link to={ROUTES.LOG_IN}>Sign In</Link></div>
        </div>
        </>
      );
    }
  }

const SignUpLink = () => (
    <div className='signup-link'>
        <div>Don't have an account?</div>
        <Link to={ROUTES.SIGN_UP}>
          Sign Up
        </Link>
    </div>
);


const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
