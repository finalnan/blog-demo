import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';

import UserHeader from './UserHeader';

class PostList extends React.Component<any> {
  componentDidMount(): void {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.post.map((post: any) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state: any) => {
  return { post: state.posts };
};

export default connect(mapStateToProps, {
  fetchPostsAndUsers,
})(PostList);
