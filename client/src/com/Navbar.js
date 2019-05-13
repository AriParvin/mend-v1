import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
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
                              <li className='nav-app-logo'>
                                   <Link to='/' id='logo' >SALVE</Link></li>

                              <Searchbar />
                              {loggedin ?
                                   <button onClick='logout'>
                                        <Link
                                             to="/login"
                                             style={{ textDecoration: "none" }}>
                                             Log out
                                   </Link></button>
                                   : <button><Link
                                        to="/login"
                                        style={{ textDecoration: "none" }}>
                                        Log in
                                   </Link></button>}
                         </ul>
                    </nav>
               </>
          )
     }
}

