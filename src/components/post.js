import React, { Component } from 'react';
import axios from 'axios'

class post extends Component {
  state = {post:[]}
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>{
        this.setState({post:res.data})
      })
  }
  render() {
    let post = this.state.post
    let newPost = post.slice(0,10)
    return (
      <div className="App">
      <ul>
        { newPost.map((el,i)=>(
          <li key={i}>{el.body}</li>
        ))}
        </ul>
      </div>
    );
  }
}

export default post;
