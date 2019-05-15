import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Store extends Component {
     render() {
          return (
               <div>
                    <h1>Where to buy?</h1>
                    <p>We recommend you these stores:</p>
                    <div className='store-list'>
                         <ul>
                              <li>

                                   <img
                                        src='https://i.postimg.cc/Zns7dGLd/Herru.png'>
                                   </img>
                                   <section className='store-info'>
                                        <a href='https://herr-u.de/'>Herr U</a>
                                        <p>Oranienburger Str. 32, 10117</p>
                                        <p>Tu-Sa 12-19 h</p>
                                        <p>+49 (0)30 24 63 02 50</p>
                                   </section>
                              </li>
                              <li>
                                   <img
                                        src='https://i.postimg.cc/26z2XkcW/wollen.png'>
                                   </img>

                                   <section className='store-info'>
                                        <a href='https://wollen-berlin.de/'>Wollen</a>
                                        <p>Gärtner Str. Str. 32, 10245</p>
                                        <p>Tu-Fr 11-19 h, Sa 10-16 h</p>
                                        <p>+49 (0) 30 29 35 19 95</p>
                                   </section>
                              </li>
                              <li>
                                   <img
                                        src='https://i.postimg.cc/Sx25Wx3N/frau-tulpe-logo.png'>
                                   </img>
                                   <section className='store-info'>
                                        <a href='https://www.frautulpe.de/'>Frau Tulpe</a>
                                        <p>Veteranen Str. 19, 10119</p>
                                        <p>+49 (0)30 44 32 78 65</p>
                                   </section>
                              </li>
                         </ul>
                    </div>
               </div>
          )
     }
}
