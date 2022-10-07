import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectPost } from '../actions/PostAction'

export class PostList extends Component {t

    createListItems(){
        return this.props.AllPosts.map((post)=>{
            return (
                <li key={post.id} onClick={() => this.props.selectPost(post)}>{post.title} - {post.text}</li>
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

function matchDispatchToProps(dispach){
  return bindActionCreators({selectPost:selectPost},dispach)
}

export default connect(mapStateToProps, matchDispatchToProps)(PostList)
