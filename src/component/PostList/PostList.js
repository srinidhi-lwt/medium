import React from 'react';
import Post from '../../component/Post/Post'

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
           'heading': 'My first post',
           'views': 1,
           'id': 1,
        },
        {
          'heading': 'My second post',
          'views': 10,
          'id': 2,
        },
        {
          'heading': 'My third post',
          'views': 100,
          'id': 3
        }
      ]
    }
  }


  render() {
    return(
      <div>
        {
          this.state.posts.map((ele, i) => {
            return <Post post = {ele} key = {i} showMyPost = {this.props.showMyPost}/>
          })
        }
      </div>
    );
  }
}

export default PostList;