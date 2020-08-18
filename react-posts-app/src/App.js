import React from "react";
import PostsList from "./components/PostsList";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="posts-app">
          <h1>Posts App</h1>
        <form className="posts-form">
          <label>title</label>
          <input type="text"></input>
          <label>content</label>
          <textarea></textarea>
          <button>Submit</button>
        </form>
        <div className="posts-list">
          <PostsList />
        </div>
      </div>
    );
  }
}

export default App;
