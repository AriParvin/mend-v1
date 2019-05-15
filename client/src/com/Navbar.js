import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavDrop from './NavDrop'
import { loggedin, login, logout } from '../service/api'

export default class Navbar extends Component {
     state = {
          query: '',
     }

     handleInputChange = () => {
          this.setState({
               query: this.search.value
          })
     }

     render() {
          return (
               <>
                    <nav className='nav-style'>
                         <ul>
                              <NavDrop />

                              <div id='auth-btn'>
                                   <Link
                                        to="/login"
                                        style={{ textDecoration: "none" }}>
                                        Sign in
                                   </Link>
                              </div>
                         </ul>
                    </nav>
               </>
          )
     }
}

