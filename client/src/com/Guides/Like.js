import React, { Component } from 'react'

export default class Like extends Component {

     state = {
          likes: 0,
          updated: false
     }
     updateLikes = () => {
          if (!this.state.updated) {
               this.setState((prevState, props) => {
                    return {
                         likes: prevState.likes + 1,
                         updated: true
                    }
               })
          } else {
               this.setState((prevState, props) => {
                    return {
                         likes: prevState.likes - 1,
                         updated: false
                    }
               })
          }
     }
     render() {
          return (
               <div className='like-btn'>
                    <i className='fa fa-heart' onClick={this.updateLikes}> {this.state.likes}</i>
               </div>
          )
     }
}