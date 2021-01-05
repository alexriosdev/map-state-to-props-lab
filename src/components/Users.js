import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    let { users } = this.props;
    return (
      <div>
        <ul>
          Users: {users.length}
          {users.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Users);
