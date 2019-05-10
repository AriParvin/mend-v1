import React, { Component } from 'react'

class Searchbar extends Component {
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
                    <ul>
                         <li className='nav-app-logo'></li>
                         <li className='nav-search-tab'>
                              <form className='nav-search'>
                                   <input className='search-bar'
                                        id='searchText'
                                        ref={input => this.search = input}
                                        onChange={this.handleInputChange}
                                        type='text'
                                        name='searchtext'
                                        placeholder='What do you want to fix?'>
                                   </input>
                                   <button>Filter</button>

                                   <button>Search</button>


                              </form>
                         </li>
                    </ul>
               </>
          )
     }
}

export default Searchbar