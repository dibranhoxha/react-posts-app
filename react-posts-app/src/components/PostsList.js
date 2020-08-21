import React from "react";
import PostItem from "./Post-Item";

class PostsList extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      title: "",
      content: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      posts: [
        ...prevState.posts,
        { title: this.state.title, content: this.state.content },
      ],
    }));
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeContent(e) {
    this.setState({
      content: e.target.value,
    });
  }

  render() {
    //   console.log(this.state.posts);
    return (
      <>
        <form className="posts-form" onSubmit={this.onSubmit}>
          <label htmlFor="post-input">Title</label>
          <input
            type="text"
            id="post-input"
            placeholder="Type a post title.."
            value={this.state.title}
            onChange={this.onChangeTitle}
            required
          ></input>
          <label htmlFor="post-textarea">Content</label>
          <textarea
            placeholder="What are you thinking!.."
            id="post-textarea"
            value={this.state.content}
            onChange={this.onChangeContent}
            required
          ></textarea>
          <div id="form-button">
            <button>Post</button>
          </div>
        </form>
        <ul className="posts-list">
          {!this.state.posts ? (
            <h3>Enter something!..</h3>
          ) : (
            this.state.posts.map(e => <PostItem title={e.title} content={e.content} /> ) 
          )}
        </ul>
      </>
    );
  }
}

export default PostsList;
