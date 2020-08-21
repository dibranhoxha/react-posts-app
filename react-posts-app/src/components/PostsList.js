import React from "react";
import PostItem from "./Post-Item";
import Moment from "moment";

class PostsList extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      title: "",
      textarea: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.toggleVote = this.toggleVote.bind(this);
    this.removePost = this.removePost.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const newPosts = {
      id: this.state.posts.length,
      title: this.state.title,
      content: this.state.content,
      date: Moment().format("DD.MM.YYYY hh:mm:ss "),
      upvote: false,
    };
    this.setState((prevState) => ({
      posts: [...prevState.posts, newPosts],
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

  toggleVote(id) {
    this.setState((prevState) => {
      const posts = prevState.posts.map((e) => {
        if (e.id === id) {
          e.upvote = !e.upvote;
        }
        return e;
      });
      return {
        posts,
      };
    });
  }

  removePost(id) {
    this.setState((prevState) => {
      const posts = prevState.posts.filter((e) => e.id !== id);
      return {
        posts,
      };
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
          {!this.state.posts.length ? (
            <h3>Enter something!..</h3>
          ) : (
            this.state.posts.map((post) => (
              <PostItem
                key={post.id}
                data={post}
                toggleVote={() => this.toggleVote(post.id)}
                removePost={() => this.removePost(post.id)}
              />
            ))
          )}
        </ul>
      </>
    );
  }
}

export default PostsList;
