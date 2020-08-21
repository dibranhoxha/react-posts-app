import React from "react";

class PostsItem extends React.Component {
  
  render() {
    const { title, content, date } = this.props.data;
    const { toggleVote, removePost, editPost } = this.props;
    return (
      <li className="post-item">
        <h3 className="post-title">{title}</h3>
        <p>
          {content}
          <span>{date}</span>
        </p>

        <div className="vote-buttons">
          <button
            className={this.props.data.upvote ? "upvote" : ""}
            onClick={toggleVote}
          >
            {this.props.data.upvote ? "Downvote" : "Upvote"}
          </button>
          <button onClick={editPost}>Edit</button>
          <button onClick={removePost}>Remove</button>
        </div>
      </li>
    );
  }
}

export default PostsItem;
