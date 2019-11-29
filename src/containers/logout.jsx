import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logoutUser from '../actions/logout';
import LoginOut from '../pages/home/components/loginout';


class LogoutContainers extends PureComponent {
     logout = () => {
       const { loginOut } = this.props;
       sessionStorage.removeItem('token');
       return loginOut();
     };

     render() {
       return (
         <LoginOut logout={this.logout} />
       );
     }
}
const mapDispatchToProps = (dispatch) => ({
  loginOut: () => dispatch(logoutUser()),
});

export default connect(null, mapDispatchToProps)(LogoutContainers);
