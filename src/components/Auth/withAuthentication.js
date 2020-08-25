import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'

//import AuthUserContext from './context';
import { withFirebase } from '../../firebase';
import SET_AUTH_USER from '../../store/reducers/session'

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.props.onSetAuthUser(
        JSON.parse(localStorage.getItem('authUser'))
      )
    }

    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          localStorage.setItem('authUser', JSON.stringify(authUser))
          this.props.onSetAuthUser('authUser')
        },
        () => {
          localStorage.removeItem('authUser')
          this.props.onSetAuthUser(null)
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
      onSetAuthUser: authUser => dispatch({ type: SET_AUTH_USER, authUser})
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
