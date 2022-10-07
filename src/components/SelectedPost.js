import React, { Component } from 'react'
import { connect } from 'react-redux'

class SelectedPost extends Component {
  render() {
    if(!this.props.selectedPost){
        return (
            <h2>Select a Post</h2>
        )
    }
    return (
      <div>
        <h2>User ID: {this.props.selectedPost.user_id}</h2>
        <h5>Title: {this.props.selectedPost.title}</h5>
        <h5>Text: {this.props.selectedPost.text}</h5>
      </div>
    )
  }
}

function mapStateToProps(state)
{
    return {
        selectedPost: state.selectedPost
    }
}

export default connect(mapStateToProps)(SelectedPost)
