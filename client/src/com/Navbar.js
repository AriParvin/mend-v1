import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

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

                              <Link to="/login" style={{ textDecoration: "none" }}>
                                   Log in
              </Link>

                         </ul>
                    </nav>
               </>
          )
     }
}

