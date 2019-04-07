import React from 'react';
import './Post.css'
import Border from './../../component/Border/Border'
import { Link } from 'react-router-dom'

class Post extends React.Component {
  showPost = () => {
    this.props.showMyPost(this.props)
  }

  render() {

    return (
      <div className="my-post">
        <Link to = "/show"><h1 onClick = {this.showPost}> { this.props.heading }</h1></Link>
        <p>{ this.props.views }</p>
      </div>
    )
  }
}

export default Border(Post);