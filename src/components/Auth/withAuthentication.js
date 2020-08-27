import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withFirebase } from '../../firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.props.setAuthUser(
        JSON.parse(localStorage.getItem('authUser'))
      )
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          localStorage.setItem('authUser', JSON.stringify(authUser))
          this.props.setUser({
            id: authUser.uid,
            userRef: this.props.firebase.user(authUser.uid),
            bubosRef: this.props.firebase.bubos(authUser.uid)
          })
          this.props.setAuthUser('authUser');
        },
        () => {
          localStorage.removeItem('authUser')
          this.props.setAuthUser(null)
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <Component {...this.props} />
      );
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      setAuthUser: authUser => dispatch({ type: 'SET_AUTH_USER', authUser }),
      setUser: user => dispatch({ type: 'SET_USER', user })
    }
  }

  return compose(
    withFirebase,
    connect(
      null, mapDispatchToProps
    ),
    )(WithAuthentication);
};


export default withAuthentication;
