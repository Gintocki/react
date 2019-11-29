import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import userRevisit from '../actions/userRevisit';
import App from '../pages/app/App';

class AppContainers extends PureComponent {
componentDidMount = () => {
  const { revisit } = this.props;
  const token = sessionStorage.getItem('token');
  if (token) {
    return revisit();
  }
}

render() {
  const { email } = this.props;

  return (
    <App email={email} />
  );
}
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  revisit: () => dispatch(userRevisit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainers);
