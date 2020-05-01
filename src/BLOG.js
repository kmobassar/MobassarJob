import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import './Blog.css';

class Blog extends Component{
  constructor(){
    super()
    this.state={
      data:[]
    }
    axios.get("http://localhost:5000/blog")
    .then(res=>{
      this.state.data=res.data
      console.log(this.state.data)
    })
  }
  render(){
    return(
      <div className="sum1">
        <h1 className="sum2">WELCOME!</h1>
        <p>Kindly click on Blog link Again! </p>
        <ul className="sum3">
          {this.state.data.map(blog=>(
            <li className="sum4">
                <h1>{blog[0]}</h1>
                <p>{blog[1]}</p> 
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Blog;