import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Landing extends Component {
     render() {
          return (
               <>
                    <h3 id='landing-title'>Why buy when you can mend?</h3>
                    <div src='https://unsplash.com/photos/FQ83tBxftJc' id='landing-banner'>Header image</div>
                    <section className='article-section'>What do we offer?</section>
                    <div id='landing-sec2'>
                         <h2>Cleaning and Repairing Garments</h2>

                         <Link to='/guides'>All Guides</Link>
                    </div>
               </>)
     }
}
