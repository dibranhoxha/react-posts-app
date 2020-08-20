import React from "react";
import PostsList from "./components/PostsList";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="posts-app">
          <h1>Posts App</h1>
        <form className="posts-form">
          <label for="post-input">Title</label>
          <input type="text" id="post-input" placeholder="Type a post title.."></input>
          <label for="post-textarea">Content</label>
          <textarea placeholder="What are you thinking!.." id="post-textarea"></textarea>
          <button>Post</button>
        </form>
        <div className="posts-list">
          <PostsList />
        </div>
      </div>
    );
  }
}

export default App;
