import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component<any> {
  render(): React.ReactNode {
    const { user } = this.props;
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return { user: state.users.find((user: any) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
