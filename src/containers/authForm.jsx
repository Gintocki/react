import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/getUser';
import AuthForm from '../pages/auth/components/authForm';

class AuthFormContainers extends PureComponent {
  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  authorization = () => {
    const { email, password } = this.state;
    const { getUser } = this.props;

    if (email === '' || password === '') {
      return alert('Заполните все поля');
    }

    return getUser(email, password);
  }

  render() {
    return (
      <AuthForm authorization={this.authorization} handleChange={this.handleChange} />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUser: (email, password) => dispatch(fetchUser(email, password)),
});

export default connect(null, mapDispatchToProps)(AuthFormContainers);
