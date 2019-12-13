import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from '../pages/home/components/table';

class TableContainers extends PureComponent {
  render() {
    const { users } = this.props;
    return (
      <Table users={users} />
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.users,
});
export default connect(mapStateToProps)(TableContainers);
