import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/getUsers';
import Home from '../pages/home/home';

class HomeContainer extends PureComponent {
    componentDidMount = () => {
      const { showUsers } = this.props;

      showUsers();
    }

    render() {
      return (
        <Home />
      );
    }
}

const mapDispatchToProps = (dispatch) => ({
  showUsers: () => dispatch(getUsers()),
});

export default connect(null, mapDispatchToProps)(HomeContainer);
