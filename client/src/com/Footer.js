import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
     render() {
          return (
               <>
                    <nav className='foot-style'>
                         <ul>
                              <Link
                                   to="/"
                                   style={{ textDecoration: "none" }}>
                                   About us
                                   </Link>
                              <Link
                                   to="/"
                                   style={{ textDecoration: "none" }}>
                                   Contact us
                                   </Link>
                              <Link
                                   to="/"
                                   style={{ textDecoration: "none" }}>
                                   Follow
                                   </Link>
                         </ul>
                    </nav>
               </>
          )
     }
}
