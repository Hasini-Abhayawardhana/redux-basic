import React, { Component } from 'react'
import { fetchPosts } from '../actions/PostAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Button extends Component {
    render(){
        return (
            <div>
                <button onClick={() => this.props.fetchPosts()} >Click Me</button>
            </div>
        )
    }
}

function matchDispatchToProps (dispach) {
    return bindActionCreators({fetchPosts: fetchPosts}, dispach)
}

export default connect(null, matchDispatchToProps)(Button) 
// export default Button
