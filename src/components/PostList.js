import React, { Component } from 'react'
import { connect, Connect } from 'react-redux'

export class PostList extends Component {t

    createListItems(){
        return this.props.AllPosts.map((post)=>{
            return (
                <li key={post.id}>{post.title} - {post.text}</li>
            )
        })
    }


  render() {
    if(!this.props.AllPosts){
        return (
            <h2>Click the Button</h2>
          )
    }
    return (
      <ul> 
        {this.createListItems()}
      </ul>
    )
  }
}

function mapStateToProps(state){
    return{
        AllPosts: state.allPosts
    }
}

export default connect(mapStateToProps, null)(PostList)
