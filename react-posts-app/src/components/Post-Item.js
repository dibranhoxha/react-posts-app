import React from "react";

class PostsItem extends React.Component {
    
  render() {

    return (
      <li className="post-item">
        <h3 className="post-title">{this.props.data.title}</h3>
        <p>
          {this.props.data.content}
          <span>{this.props.data.date}</span>
        </p>
    
        <div className="vote-buttons">
          <button>Upvote</button>
          <button>Edit</button>
        </div>
      </li>
    );
  }
}

export default PostsItem;
