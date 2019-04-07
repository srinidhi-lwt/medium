import React from 'react';

const Border =  (InputComponent) => {
  return class extends React.Component {

    render() {
      return(
        <div className = 'give-border'><InputComponent heading = {this.props.post.heading} views = {this.props.post.views} showMyPost = {this.props.showMyPost} /></div>
      );
    }
  }
}

export default Border;