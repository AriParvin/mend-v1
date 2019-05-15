import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import List from './Guides/List'
import Footer from './Footer'


export default class Landing extends Component {
     render() {
          return (
               <>
                    {/* <h3 id='landing-title'>This is a placeholder title.</h3> */}
                    <h1 id='restora'>RESTORA</h1>
                    <div id='landing-banner'><h1></h1></div>
                    <div id='landing-sec2'>
                         <section className='article-section'>What do we offer?</section>
                         <h2>Cleaning and Repairing of Garments</h2>
                         <div class='landing-options'>
                              <div id='landing-options-diy'> <Link to='./guides'>DIY Videos and Guides</Link></div>
                              <div id='landing-options-workshop'><Link to='./workshops'>Workshops</Link></div>
                         </div>
                         <Footer />
                    </div>
               </>)
     }
}
