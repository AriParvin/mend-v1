import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import List from './Guides/List'


export default class Landing extends Component {
     render() {
          return (
               <>
                    {/* <h3 id='landing-title'>This is a placeholder title.</h3> */}
                    <div id='landing-banner'><h1>Welcome</h1></div>
                    <section className='article-section'>What do we offer?</section>
                    <div id='landing-sec2'>
                         <List />
                         <Link to='/guides'>All Guides</Link>
                    </div>
               </>)
     }
}
