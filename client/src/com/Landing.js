import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import List from './Guides/List'
import Footer from './Footer'


export default class Landing extends Component {
     render() {
          return (
               <>
                    {/* <h3 id='landing-title'>This is a placeholder title.</h3> */}
                    <img src='https://i.postimg.cc/gJpPWC14/LOGO.png' />
                    <div id='landing-banner'>
                    </div>
                    <div id='landing-sec2'>
                         <section className='article-section'>
                              <h1>What do we offer?</h1>
                         </section>
                         <h2>Cleaning and Repairing of Garments</h2>
                         <div className='landing-options'>
                              <div className='landing-options-diy'> <Link to='./diy'>DIY Videos and Guides</Link></div>
                              <div className='landing-options-workshop'><Link to='./workshops'>Workshops</Link></div>
                         </div>
                    </div>
               </>)
     }
}
