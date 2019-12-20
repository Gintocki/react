import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addUsers } from '../actions/addUser';
import ActionForm from '../pages/home/components/actionForm';

class ActionFormContainer extends PureComponent {
    state={
      name: '',
      surname: '',
      age: '',
    }

    add =() => {
      const { name, surname, age } = this.state;
      const { getUsers } = this.props;
      if (name === '' || surname === '' || age === '') {
        return alert('Поля не заполнены');
      }
      return getUsers(name, surname, age);
    }

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    }

    render() {
      return (
        <ActionForm add={this.add} handleChange={this.handleChange} />
      );
    }
}

const mapDispatchToProps = (dispatch) => ({
  getUsers: (name, surname, age) => dispatch(addUsers(name, surname, age)),
});
export default connect(null, mapDispatchToProps)(ActionFormContainer);
