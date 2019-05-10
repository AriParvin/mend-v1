import React, { Component } from 'react'
import Searchbar from './Searchbar'

class Navbar extends Component {

     render() {
          return (
               <>
                    <nav className='nav-style'>
                         <Searchbar />
                    </nav>
               </>
          )
     }
}

export default Navbar