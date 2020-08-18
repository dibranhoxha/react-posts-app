import React from "react";

class PostsList extends React.Component {
  render() {
    return (
      <ul className="posts-list">
        <li className="post-item">
            <h3>title</h3>
            <p>
                Something!...
            </p>
            <div className="vote-buttons">
                <button>Upvote</button>
                <button>Downvote</button>
            </div>
        </li>
      </ul>
    );
  }
}

export default PostsList;
