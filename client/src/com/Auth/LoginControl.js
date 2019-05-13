import React, { Component } from 'react'

export default class LoginControl extends Component {
     state = {
          isLoggedIn: false
     }

     handleLoginClick() {
          this.setState({ isLoggedIn: true })
     }
     handleLogoutClick() {
          this.setState({ isLoggedIn: false });
     }

     render() {
          const isLoggedIn = this.state.isLoggedIn
          let button
          return (
               <>
                    {isLoggedIn ?
                         <LogoutButton onClick={this.handleLogoutClick} />
                         : <LoginButton onClick={this.handleLoginClick} />}
               </>)
     }
}
