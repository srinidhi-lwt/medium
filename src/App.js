import React, { Component } from 'react';
import './App.css';
import PostList from './component/PostList/PostList'
import { BrowserRouter, Route } from 'react-router-dom'
import Post from './component/Post/Post'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      heading: '',
      views: ''
    }
  }

  showPost = (post) => {
    this.setState({
      heading: post.heading,
      views: post.views
    })
  }

  render() {
    const post = {
      heading: this.state.heading,
      views: this.state.views
    }
    return (
      <BrowserRouter>
        <div className="App">
          <Route path = "/" exact render = { () => <PostList showMyPost = {this.showPost}/>  }/>
          <Route path = "/show" exact render = { ()  => <Post post = { post } /> }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
