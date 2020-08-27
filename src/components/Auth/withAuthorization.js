import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../../firebase';
import * as ROUTES from '../../constants/routes';


const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          if (!condition(authUser)) {
            this.props.history.push(ROUTES.LOG_IN);
          }
        },
        () => this.props.history.push(ROUTES.LOG_IN),
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return condition(this.props.authUser) ? (
            <Component {...this.props} />
            ) : null
      }
    }

  const mapStateToProps = state => ({
    authUser: state.session.authUser
  })

  return compose(
    withRouter,
    withFirebase,
    connect(mapStateToProps),
  )(WithAuthorization);
};

export default withAuthorization;
