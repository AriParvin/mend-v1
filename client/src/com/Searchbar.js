import React, { Component } from 'react'

export default class Searchbar extends Component {
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
                    <form className='nav-search'>
                         <input className='search-bar'
                              id='searchText'
                              ref={input => this.search = input}
                              onChange={this.handleInputChange}
                              type='text'
                              name='searchtext'
                              placeholder='What do you want to fix?'>
                         </input>
                    </form>
               </>
          )
     }
}
